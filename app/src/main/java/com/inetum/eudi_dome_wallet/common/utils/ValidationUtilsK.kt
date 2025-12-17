package com.inetum.eudi_dome_wallet.common.utils

object ValidationUtilsK {

    /**
     * Validates if a password meets the criteria of containing at least one lowercase letter,
     * one uppercase letter, and one digit.
     *
     * @param value The password to validate.
     * @return `true` if the password is valid, `false` otherwise.
     */
    fun isPwdValid(value: String): Boolean {
        return containsLowerCase(value) &&
                containsUpperCase(value) &&
                containsNumber(value)
    }

    /**
     * Checks if the string contains a character that matches the given condition (predicate).
     *
     * @param value The string to check.
     * @param predicate The condition to match for each character.
     * @return `true` if any character matches the predicate, `false` otherwise.
     */
    private fun contains(value: String, predicate: (Char) -> Boolean): Boolean {
        return value.any(predicate)
    }

    /**
     * Checks if the string contains at least one lowercase letter.
     *
     * @param value The string to check.
     * @return `true` if the string contains a lowercase letter, `false` otherwise.
     */
    private fun containsLowerCase(value: String): Boolean {
        return contains(value) { it.isLowerCase() }
    }

    /**
     * Checks if the string contains at least one uppercase letter.
     *
     * @param value The string to check.
     * @return `true` if the string contains an uppercase letter, `false` otherwise.
     */
    private fun containsUpperCase(value: String): Boolean {
        return contains(value) { it.isUpperCase() }
    }

    /**
     * Checks if the string contains at least one digit.
     *
     * @param value The string to check.
     * @return `true` if the string contains a digit, `false` otherwise.
     */
    private fun containsNumber(value: String): Boolean {
        return contains(value) { it.isDigit() }
    }
}