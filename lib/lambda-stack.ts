import * as codedeploy from '@aws-cdk/aws-codedeploy';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGW from '@aws-cdk/aws-apigateway';
import { App, Stack, StackProps, CfnOutput } from '@aws-cdk/core';

export class LambdaStack extends Stack {
  public readonly lambdaCode: lambda.CfnParametersCode;
  public readonly urlOutput: CfnOutput;

  constructor(app: App, id: string, props?: StackProps) {
    super(app, id, props);

    this.lambdaCode = lambda.Code.fromCfnParameters();

    const func = new lambda.Function(this, 'Lambda', {
      code: this.lambdaCode,
      handler: 'index.main',
      runtime: lambda.Runtime.NODEJS_12_X,
      description: `Function generated on: ${new Date().toISOString()}`,
    });

    const alias = new lambda.Alias(this, 'LambdaAlias', {
      aliasName: 'Prod',
      version: func.currentVersion,
    });

    new codedeploy.LambdaDeploymentGroup(this, 'DeploymentGroup', {
      alias,
      deploymentConfig: codedeploy.LambdaDeploymentConfig.LINEAR_10PERCENT_EVERY_1MINUTE,
    });

    const gw = new apiGW.LambdaRestApi(this, 'Gateway', {
      description: 'API endpoint for the lambda function cdk-demo',
      handler: func,
    });

    this.urlOutput = new CfnOutput(this, 'api url', {
      value: gw.url,
    });
  }
}
