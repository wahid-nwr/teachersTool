/*
 * @ (#) InvalidGroupException.java
 * 
 * Copyright (c) 2010 ClickDiagnostics Inc. All Rights Reserved. This software is the
 * confidential and proprietary information of ClickDiagnostics ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered
 * into with ClickDiagnostics.
 */
package com.swiftcorp.portal.group.exception;

import com.swiftcorp.portal.common.exception.BusinessRuleViolationException;

/**
 * @author swift
 * @since mar 3, 2011
 */
public class InvalidGroupException extends BusinessRuleViolationException
{
	
	public InvalidGroupException ( String message, Throwable cause )
	{
		super ( message, cause );
		// TODO Auto-generated constructor stub
	}
	
	public InvalidGroupException ( Throwable cause )
	{
		super ( cause );
		// TODO Auto-generated constructor stub
	}
	
	public InvalidGroupException ( )
	{
		super ();
		// TODO Auto-generated constructor stub
	}
	
	public InvalidGroupException ( int errorCode, String message )
	{
		super ( errorCode, message );
		// TODO Auto-generated constructor stub
	}
	
	public InvalidGroupException ( int errorCode )
	{
		super ( errorCode );
		// TODO Auto-generated constructor stub
	}
	
	public InvalidGroupException ( String message )
	{
		super ( message );
		// TODO Auto-generated constructor stub
	}
	
}
