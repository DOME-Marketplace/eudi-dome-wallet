package com.inetum.eudi_dome_wallet.common.utils

object AppUtils {

    /**
     * Retrieves the name of the currently executing function.
     *
     * It checks the current thread's stack trace, prioritizing coroutines (via `invokeSuspend`).
     * If no coroutine is involved, it looks for the first valid method that isn't internal
     * (e.g., system, coroutine, or `getFunctionName()` itself).
     *
     * @return The function name as a String, or "Unknown function()" if not found.
     */
    fun getFunctionName(): String {
        val stackTrace = Thread.currentThread().stackTrace
        val clazz = stackTrace.firstOrNull { it.methodName == "invokeSuspend" }
        val className = if (clazz != null) {
            val split = clazz.className.split("$")
            if (split.size > 1) {
                split[1]
            } else {
                null
            }
        } else {
            stackTrace.firstOrNull {
                it.methodName != "getThreadStackTrace" &&
                        it.methodName != "getStackTrace" &&
                        it.methodName != "getFunctionName" &&
                        it.methodName != "invoke" &&
                        !it.className.contains("coroutines") &&
                        !it.className.contains("android")
            }?.methodName
        }
        return if (className != null) "$className()" else "Unknown function()"
    }
}