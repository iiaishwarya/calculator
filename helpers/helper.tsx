import React from 'react';

class Helper {
  expression = '';
  result = '';
  constructor(expression: string, result: string) {
    this.expression = expression;
    this.result = result;
  }

  getExpressionAndResult() {
    return {expression: this.expression, result: this.result};
  }

  clearAll() {
    this.expression = '';
    this.result = '';
  }

  handleEqual() {
    if (this.validInput()) {
      let handlePercent = this.expression.replace(
        new RegExp('%', 'g'),
        '*0.01',
      );
      let result = eval(handlePercent);
      let resultString = this.formatResult(result);
      this.result = resultString;
      this.expression = resultString;
    }
  }

  validInput() {
    let totalChars = [];
    let expressionArray = Array.from(this.expression);
    let count = expressionArray.length;

    for (let char in expressionArray) {
      if (this.isSpecialCharacter(expressionArray[char])) {
        totalChars.push(char);
      }
    }
    let previous = -1;
    for (let index of totalChars) {
      let temp = parseInt(index);
      if (temp == 0 || temp == count - 1) {
        return false;
      }
      if (previous != -1) {
        if (temp - previous == 1) {
          return false;
        }
      }
      previous = temp;
    }
    return true;
  }

  isSpecialCharacter(char: string) {
    if (char === '*' || char === '/' || char === '+' || char === '-') {
      return true;
    }
    return false;
  }

  formatResult(result: number) {
    if (result % 1 === 0) {
      return result.toFixed(0);
    } else {
      return result.toFixed(2);
    }
  }
  handleAllClear() {
    this.clearAll();
  }

  handleBack() {
    if (this.expression != '') {
      this.expression = this.expression.substring(
        0,
        this.expression.length - 1,
      );
    }
  }
  addToExpression(value: string) {
    this.expression = this.expression + value;
  }

  handlePercent() {
    if (this.expression != '') {
      this.addToExpression('%');
    }
  }
  handleOperation(operation: string) {
    if (
      this.expression != '' &&
      !this.isSpecialCharacter(
        this.expression.charAt(this.expression.length - 1),
      )
    )
      this.addToExpression(operation);
  }

  handleNumberTap(num: string) {
    this.addToExpression(num);
  }
  handleDecimalTap() {
    this.addToExpression('.');
  }
}

module.exports = function (expression: string, result: string) {
  return new Helper(expression, result);
};

module.exports.Helpers = Helper;
