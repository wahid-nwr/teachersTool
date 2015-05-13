/*
 * @ (#) HomeSuccessResult.java
 * 
 * Copyright (c) 2010 ClickDiagnostics Inc. All Rights Reserved. This software is the
 * confidential and proprietary information of ClickDiagnostics ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered
 * into with ClickDiagnostics.
 */
package com.swiftcorp.portal.home;
import com.swiftcorp.portal.home.dto.HomeDTO;
import com.swiftcorp.portal.common.BusinessOperationResult;
/**
 * @author swift
 * @since mar 3, 2011
 */
public class HomeSuccessResult extends BusinessOperationResult
{
	private HomeDTO operationResult;
	public HomeDTO getOperationResult()
	{
		return operationResult;
	}
	public void setOperationResult(HomeDTO operationResult)
	{
		this.operationResult = operationResult;
	}	
	 
	 
}
