package com.example.coreplayers;



import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="players")

public class Player {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private String name;
private int age;
private String username;
private String email;
private String password;
private Timestamp created_at;

public Player() {
	
}



public Player(int id, String name, int age, String username, String email, String password, Timestamp created_at ) {
	super();
	this.id = id;
	this.name = name;
	this.age = age;
	this.username = username;
	this.email = email;
	this.password = password;
	this.created_at = created_at;
}



public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public Timestamp getCreated_at() {
	return created_at;
}

public void setCreated_at(Timestamp created_at) {
	this.created_at = created_at;
}



public int getAge() {
	return age;
}



public void setAge(int age) {
	this.age = age;
}


public String getPassword() {
	return password;
}



public void setPassword(String password) {
	this.password = password;
}



@Override
public String toString() {
	return "Player [id=" + id + ", name=" + name + ", age=" + age + ", username=" + username + ", email=" + email
			+ ", password=" + password + ", created_at=" + created_at + "]";
}




}
