/**
 * @fileoverview Arithmetic operators are used to perform arithmetic between
 * variables and/or values.
 *
 * Arithmetic or arithmetics (from the Greek ἀριθμός arithmos, "number") is
 * the oldest and most elementary branch of mathematics. It consists of
 * the study of numbers, especially the properties of the traditional
 * operations between them—addition, subtraction, multiplication and division.
 * Arithmetic is an elementary part of number theory, and number theory is
 * considered to be one of the top-level divisions of modern mathematics,
 * along with algebra, geometry, and analysis. The terms arithmetic and higher
 * arithmetic were used until the beginning of the 20th century as synonyms
 * for number theory and are sometimes still used to refer to a wider part of
 * number theory.
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

"use strict";

module.exports = {

  /**
   * Addition (often signified by the plus symbol "+") is one of the four basic
   * operations of arithmetic, with the others being subtraction, multiplication
   * and division. The addition of two whole numbers is the total amount of
   * those quantities combined. For example, in the picture on the right,
   * there is a combination of three apples and two apples together; making
   * a total of 5 apples. This observation is equivalent to the mathematical
   * expression "3 + 2 = 5" i.e., "3 add 2 is equal to 5".
   *
   * Function that performs the addition of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total addition of the parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Sum: (x, y) => x + y,

  /**
   * Subtraction is a mathematical operation that represents the operation of
   * removing objects from a collection. It is signified by the minus sign (−).
   * For example, in the picture on the right, there are 5 − 2 apples—meaning 5
   * apples with 2 taken away, which is a total of 3 apples. Therefore,
   * 5 − 2 = 3. Besides counting fruits, subtraction can also represent
   * combining other physical and abstract quantities using different kinds
   * of objects including negative numbers, fractions, irrational numbers,
   * vectors, decimals, functions, and matrices.
   *
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
   *Multiplication (often denoted by the cross symbol "×", by a point "·" or
   *by the absence of symbol) is one of the four elementary, mathematical
   *operations of arithmetic; with the others being addition, subtraction
   *and division. The multiplication of two whole numbers, when thinking of
   *multiplication as repeated addition, is equivalent to adding as many
   *copies of one of them (multiplicand) as the value of the other one
   *(multiplier). Normally the multiplier is written first and multiplicand
   *second, though this can vary and sometimes the distinction is not very
   *meaningful.
   *
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
   * Teaching division usually leads to the concept of fractions being
   * introduced to school pupils. Unlike addition, subtraction, and
   * multiplication, the set of all integers is not closed under division.
   * Dividing two integers may result in a remainder. To complete the division
   * of the remainder, the number system is extended to include fractions or
   * rational numbers as they are more generally called.
   *
   * Function that performs the Division of the parameter x and y
   * @param  {number} x Positive or negative number
   * @param  {number} y Positive or negative number
   * @return {number} result  Returns the total subtraction of the
   * parameter x and y
   * @author https://github.com/RodrigoOler/ (Rodrigo Oler)
   * @version 1.0.0
   */
  Divide: (x, y) => x / y,


  Modulus: (x, y) => x % y,

  Increase: (x) => x + 1,

  Decrement: (x) => x - 1
};
