const path = require('path');
const pluralize = require('pluralize');
const kebabCase = require('kebab-case');
const Generator = require('yeoman-generator');
const { camelCase, pascalCase } = require('change-case');
const { getAllFiles } = require('../../utils/files');
const { Project, QuoteKind, SyntaxKind, IndentationText } = require('ts-morph');


module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt);

    this.argument('name', {
      description: 'The name of the module to create',
      type: String
    });

    this.myConfig = {}
  }

  prompting() {
    if (!this.options['name']) {
      return this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter a name',
      }]).then(res => {
        this.myConfig['name'] = res.name;
      })
    } else {
      this.myConfig['name'] = this.options['name'];
      return Promise.resolve();
    }
  }

  writing() {
    let { name } = this.myConfig;

    let templateOptions = {
      pluralize,
      project: '@opr-api',
      varName: camelCase(name),
      varPluralName: pluralize(camelCase(name)),
      className: pascalCase(name),
      fileName: kebabCase(camelCase(name)),
      moduleName: kebabCase(camelCase(name)),
    };

    const templatePath = path.resolve(__dirname, '../../template');

    const project = new Project({
      manipulationSettings: {
        quoteKind: QuoteKind.Single,
        indentationText: IndentationText.TwoSpaces,
      },
    });

    const appModulePath = path.join(this.contextRoot, 'src/app.module.ts');

    project.addSourceFileAtPath(appModulePath);
    const source = project.getSourceFile(appModulePath);

  
    source.addImportDeclaration({
      namedImports: `${templateOptions.className}Module`,
      moduleSpecifier: `${templateOptions.project}/${templateOptions.moduleName}/${templateOptions.fileName}.module`,
    });

    const moduleDecorator = source.getClass('AppModule').getDecorator('Module');
    const moduleArguments = moduleDecorator.getArguments()[0];
  
    const declarationsProp = moduleArguments.getDescendants()
      .find(d => d.getKind() === SyntaxKind.PropertyAssignment && d.compilerNode.name.getText() === "imports");
    
    declarationsProp.getFirstChildByKindOrThrow(SyntaxKind.ArrayLiteralExpression)
      .addElement(`${templateOptions.className}Module,`);
    
    
    source.formatText({
      semicolons: 'insert',
    });

    
    getAllFiles(templatePath)
      .forEach(filePath => {
        this.fs.copyTpl(
          this.templatePath(filePath),
          this.destinationPath(`src/${filePath.replace(templatePath, templateOptions.moduleName).replace('template', templateOptions.fileName)}`), 
          templateOptions
        );
      });
    
    source.saveSync();
  }
};