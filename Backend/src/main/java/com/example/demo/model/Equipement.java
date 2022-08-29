package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name= "equipements")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Equipement {
    @Id
    private String num_serie;

    @Column(name="nom")
    private String nom;

    @Column(name="designation")
    private  String designation;

    @Column(name= "modele")
    private String madele;

    @Column(name="marque")
    private String marque;

    @Column(name="details")
    private  String details;

    @Column(name="date")
    private Date date;







}
