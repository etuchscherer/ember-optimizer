import Application from 'optimize-exploration/app';
import config from 'optimize-exploration/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
