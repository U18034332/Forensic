package com.nlc.forensic.constants

object ResponseConstant {
    // System failed
    const val REQUIRED_PARAMETERS_NOT_SET = "The required parameters were not set."
    const val USER_ALREADY_EXIST = "User already exists."
    const val USER_NOT_EXISTS = "User does not exist."
    const val INVALID_CREDENTIALS = "Invalid login. Please check your credentials."
    const val CASE_FAIL = "Case creation failed. Please check the parameters."
    const val CASE_UPDATE_FAIL = "Case update failed. Please check case number."

    // System success
    const val USER_REMOVED = "User successfully removed."
    const val CASE_CREATED = "Case successfully created."
    const val CASE_UPDATED = "Case successfully updated."
}