/*
 * @ (#) EmailrecvAlreadyExistsException.java
 * 
 * Copyright (c) 2010 ClickDiagnostics Inc. All Rights Reserved. This software is the
 * confidential and proprietary information of ClickDiagnostics ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered
 * into with ClickDiagnostics.
 */
package com.swiftcorp.portal.emailrecv.exception;
import com.swiftcorp.portal.common.exception.BusinessRuleViolationException;
/**
 * @author swift corporation
 * @since mar 3, 2011
 */
public class EmailrecvAlreadyExistsException extends BusinessRuleViolationException
{
    public EmailrecvAlreadyExistsException()
    {
        super();
        // TODO Auto-generated constructor stub
    }
    public EmailrecvAlreadyExistsException(int errorCode, String message)
    {
        super(errorCode, message);
        // TODO Auto-generated constructor stub
    }
    public EmailrecvAlreadyExistsException(int errorCode)
    {
        super(errorCode);
        // TODO Auto-generated constructor stub
    }
    public EmailrecvAlreadyExistsException(String message, Throwable cause)
    {
        super(message, cause);
        // TODO Auto-generated constructor stub
    }
    public EmailrecvAlreadyExistsException(String message)
    {
        super(message);
        // TODO Auto-generated constructor stub
    }
    public EmailrecvAlreadyExistsException(Throwable cause)
    {
        super(cause);
        // TODO Auto-generated constructor stub
    }
}
