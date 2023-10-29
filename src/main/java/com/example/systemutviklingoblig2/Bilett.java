package com.example.systemutviklingoblig2;

public class Bilett {
    private int id;
    private String film;
    private String fornavn;
    private String etternavn;
    private String epost;
    private int tellefonnummer;
    private int antall;
    private String seter;
    public Bilett(){}
    public Bilett(int id, String film, String fornavn, String etternavn, String epost, int tellefonnummer, int antall, String seter) {
        this.id = id;
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.tellefonnummer = tellefonnummer;
        this.antall = antall;
        this.seter = seter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public int getTellefonnummer() {
        return tellefonnummer;
    }

    public void setTellefonnummer(int tellefonnummer) {
        this.tellefonnummer = tellefonnummer;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getSeter() {
        return seter;
    }

    public void setSeter(String seter) {
        this.seter = seter;
    }
}
