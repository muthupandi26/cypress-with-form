var {AfterAll, BeforeAll} = require('cucumber');

import {Constant} from "../common/constants";
import * as loginData from '../../fixtures/data';

const logoutPage = new LogoutPage();

describe('Hooks', function() {
    before(function() {
      // runs once before all tests in the block
    })
  
    after(function() {
      // runs once after all tests in the block
    })
  
    beforeEach(function() {
      // runs before each test in the block
    })
  
  
afterEach(function () {
    console.log('AfterEach Works');
  })
})