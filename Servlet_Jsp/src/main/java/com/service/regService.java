package com.service;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import com.bin.copy.binclass;
import com.processing.werk;

/**
 * Servlet implementation class regService
 */
@WebServlet("/regService")
public class regService extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public regService() {
        super();
        // TODO Auto-generated constructor stub
    }
    binclass b;
    regService rs;
    werk w;
    

    protected void init(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  // db connection 
    	
    	
	}
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		HttpSession s=request.getSession();
		b=(binclass)(s.getAttribute("student"));
		w=new werk();
    	w.regStatementExecution(b);
		
		String str =""
				+ "<h1>Done</h1>"
				+ "<script>\r\n"
				+ "\r\n"
				+ "setTimeout(() => {\r\n"
				+ "\r\n"
				+ "    window.close();\r\n"
				+ "\r\n"
				+ "}, 1000);\r\n"
				+ "\r\n"
				+ "</script>";
		
		response.setContentType("text/html");
	
		response.getWriter().append(str);
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
