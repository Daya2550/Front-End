package com.bin.copy;

public class binclass {

	private String name ;
	private String id;
	private String no;
	
	
	
	public binclass(String name, String id, String no) {
		super();
		this.name = name;
		this.id = id;
		this.no = no;
	}
	
	public binclass() {
		super();
		
	}

	@Override
	public String toString() {
		return "binclass [name=" + name + ", id=" + id + ", no=" + no + ", getName()=" + getName() + ", getId()="
				+ getId() + ", getNo()=" + getNo() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	
	
}
