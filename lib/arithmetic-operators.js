/**
 * @fileoverview Arithmetic operators are used to perform arithmetic between
 * variables and/or values.
 *
 * @license The MIT License (MIT)
 * Copyright (c) 2016 Rodrigo Oler
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
 * @version 1.0.0
 */

module.exports = {

  /**
   * Function that performs the addition of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total addition of the parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Sum: (x, y) => x + y,

  /**
   * Function that performs the subtraction of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total subtraction of the
   * parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Subtract: (x, y) => x - y,

  /**
   * Function that performs the Multiplication of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total subtraction of the
   * parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Multiply: (x, y) => x * y,

  /**
   * Function that performs the Division of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total division of the
   * parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Divide: (x, y) => x / y,

  /**
   * Function that performs the Modulus of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total modulus of the
   * parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Modulus: (x, y) => x % y,

  Increase: (x) => x + 1,

  Decrement: (x) => x - 1,

  getRandom: Math.random(),

  getRandomArbitrary: (min, max) => Math.random() * (max - min) + min,

  getRandomInt: (min, max) => Math.floor(Math.random() * (max - min)) + min,

};
