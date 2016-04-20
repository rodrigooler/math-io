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
 */

"use strict";

/**
 * Addition (often signified by the plus symbol "+") is one of the four basic
 * operations of arithmetic, with the others being subtraction, multiplication
 * and division. The addition of two whole numbers is the total amount of
 * those quantities combined. For example, in the picture on the right,
 * there is a combination of three apples and two apples together; making
 * a total of 5 apples. This observation is equivalent to the mathematical
 * expression "3 + 2 = 5" i.e., "3 add 2 is equal to 5".
 *
 * @param  {number} x [Positive or negative number]
 * @param  {number} y [Positive or negative number]
 * @return {number}   [Returns the total addition of the parameter x and y]
 * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
 * @version 1.0.0
 */
const Addition = (x, y) => x + y;

const Subtraction = (x, y) => x - y;

const Multiplication = (x, y) => x * y;

const Division = (x, y) => x / y;
