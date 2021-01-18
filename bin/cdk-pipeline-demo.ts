#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPipelineDemoStack } from '../lib/cdk-pipeline-demo-stack';

const app = new cdk.App();
new CdkPipelineDemoStack(app, 'CdkPipelineDemoStack');
