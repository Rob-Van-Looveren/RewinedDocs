---
layout: default
title: bi
author: -

---

{% include nav-breadcrumbs.html %}


# BI

Welkom!

Het BI-gedeelte houdt de visualisatie in van de gegevens met behulp van de software Grafana. Hiervoor moet uiteraard ook een database aanwezig zijn waar alle gegevens van de sensoren en vaten in komen te staan.

In het onderdeel 'CCS' vindt u bij het gedeelte 'MySQL' hoe u deze installeert. Als u dit eerst wilt raadplegen, klikt u [hier](../CCS/MySQL/).

## SQL 
Voor dit project hebben we zelf een database aangemaakt met PhpMyAdmin en hierin tabellen gemaakt. Deze zijn gebaseerd op het model dat we voor dit project hebben opgesteld:

![databaseModel](/{{site.RepoName}}/media/bi/databasemodel.png)

Om deze aan te maken, werd een SQL script gemaakt. We tonen hier het gedeelte om tabellen aan te maken. We tonen niet gans het script, daar u zelf aan de slag zult gaan met een eigen naam voor elke tabel. 

Volgende SQL code zorgt voor de aanmaak van de tabellen:

CREATE TABLE Druif(
    DruifID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
	Kloontype VARCHAR(255),
	Leeftijd int,
	Perceel VARCHAR(255),
	CONSTRAINT PK_Druif PRIMARY KEY(DruifID)
);


CREATE TABLE Programma(
    ProgrammaID INT NOT NULL AUTO_INCREMENT,
    Pmax VARCHAR(255),
    Inhoud VARCHAR(255),
    Naam VARCHAR(255),
    CONSTRAINT PK_Programma PRIMARY KEY(ProgrammaID)
);

CREATE TABLE RaspberryPi(
	RaspberryPiID INT NOT NULL AUTO_INCREMENT,
	Naam VARCHAR(255),
	Wachtwoord VARCHAR(255),
	InGebruik BOOLEAN,
	CONSTRAINT PK_RaspberryPi PRIMARY KEY(RaspberryPiID)
);

CREATE TABLE Vat(
    VatID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    Oogst VARCHAR(255),
    Gekneusd BOOLEAN,
    ProgrammaID INT,
    DruifID INT,
    Nummer INT,
	RaspberryPiID INT,
	IsActief BOOLEAN,
	Locatie VARCHAR(255),
	TypeVatID INT,
	Koelmantel BOOLEAN,
	MateriaalID INT,
	Mangat BOOLEAN,
	SoortWijnID INT,
	Jaar INT,
    CONSTRAINT PK_Vat PRIMARY KEY(VatID),
    CONSTRAINT FK_Vat_Programma FOREIGN KEY(ProgrammaID) REFERENCES Programma(ProgrammaID),
    CONSTRAINT FK_Vat_Druif FOREIGN KEY(DruifID) REFERENCES Druif(DruifID),
	CONSTRAINT FK_Vat_RaspberryPi FOREIGN KEY(RaspberryPiID) REFERENCES RaspberryPi(RaspberryPiID),
	CONSTRAINT FK_Vat_TypeVat FOREIGN KEY(TypeVatID) REFERENCES TypeVat(TypeVatID),
	CONSTRAINT FK_Vat_Materiaal FOREIGN KEY(MateriaalID) REFERENCES Materiaal(MateriaalID),
	CONSTRAINT FK_Vat_Soortwijn FOREIGN KEY(SoortWijnID) REFERENCES SoortWijn(SoortWijnID)
);

CREATE TABLE TypeVat(
	TypeVatID INT NOT NULL AUTO_INCREMENT,
	Naam VARCHAR (255),
	CONSTRAINT PK_TypeVat PRIMARY KEY(TypeVatID)
)

CREATE TABLE Materiaal(
	MateriaalID INT NOT NULL AUTO_INCREMENT,
	Naam VARCHAR (255),
	CONSTRAINT PK_Materiaal PRIMARY KEY(MateriaalID)
)

CREATE TABLE SoortWijn(
	SoortWijnID INT NOT NULL AUTO_INCREMENT,
	Naam VARCHAR (255),
	CONSTRAINT PK_SoortWijn PRIMARY KEY(SoortWijnID)
)

CREATE TABLE Gebruiker(
    PersoonID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    Wachtwoord VARCHAR(255),
    Email VARCHAR(255),
    TelNummer VARCHAR(255),
    IsAdmin BOOLEAN,
    CONSTRAINT PK_Gebruiker PRIMARY KEY(PersoonID)
);


CREATE TABLE SoortActie(
    SoortActieID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    CONSTRAINT PK_SoortActie PRIMARY KEY(SoortActieID)
);


CREATE TABLE Actie(
    ActieID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    Tijdstempel DATETIME,
    VatID INT,
    GebruikerID INT,
    SoortActieID INT,
    Notitie TEXT,
    CONSTRAINT PK_Actie PRIMARY KEY(ActieID),
    CONSTRAINT FK_Actie_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    CONSTRAINT FK_Actie_Gebruiker FOREIGN KEY(GebruikerID) REFERENCES Gebruiker(PersoonID),
    CONSTRAINT FK_Actie_SoortActie FOREIGN KEY(SoortActieID) REFERENCES SoortActie(SoortActieID)
);


CREATE TABLE SoortMeting(
    SoortMetingID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    CONSTRAINT PK_SoortMeting PRIMARY KEY(SoortMetingID)
);


CREATE TABLE ManueleMeting(
    ManueleMetingID INT NOT NULL AUTO_INCREMENT,
	Tijdstempel DATETIME,
    GebruikerID INT,
    VatID INT,
    SoortMetingID INT,
    Waarde DOUBLE,
    CONSTRAINT PK_ManueleMeting PRIMARY KEY(ManueleMetingID),
    CONSTRAINT FK_ManueleMeting_Gebruiker FOREIGN KEY(GebruikerID) REFERENCES Gebruiker(PersoonID),
    CONSTRAINT FK_ManueleMeting_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    CONSTRAINT FK_ManueleMeting_SoortMeting FOREIGN KEY(SoortMetingID) REFERENCES SoortMeting(SoortMetingID)
);


CREATE TABLE Sensor(
    SensorID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    SoortMetingID INT,
    CONSTRAINT PK_Sensor PRIMARY KEY(SensorID),
    CONSTRAINT FK_Sensor_SoortMeting FOREIGN KEY(SoortMetingID) REFERENCES SoortMeting(SoortMetingID)
);


CREATE TABLE AutomatischeMeting(
    AutomatischeMetingID INT NOT NULL AUTO_INCREMENT,
    Tijdstempel DATETIME,
    VatID INT,
    SensorID INT,
    waarde DOUBLE,
    CONSTRAINT PK_AutomatischeMeting PRIMARY KEY(AutomatischeMetingID),
    CONSTRAINT FK_AutomatischeMeting_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    CONSTRAINT FK_AutomatischeMeting_Sensor FOREIGN KEY(SensorID) REFERENCES Sensor(SensorID)
);



CREATE TABLE AlarmWaarde(
    AlarmWaardeID INT NOT NULL AUTO_INCREMENT,
    SensorID INT,
    VatID INT,
    Drempel DOUBLE,
    CONSTRAINT PK_AlarmWaarde PRIMARY KEY(AlarmWaardeID),
    CONSTRAINT FK_AlarmWaare_Sensor FOREIGN KEY(SensorID) REFERENCES Sensor(SensorID)
);


CREATE TABLE SoortAlarm(
    SoortAlarmID INT NOT NULL AUTO_INCREMENT,
    Naam VARCHAR(255),
    CONSTRAINT PK_SoortAlarm PRIMARY KEY(SoortAlarmID)
);


CREATE TABLE AlarmGebruiker(
    AlarmGebruikerID INT NOT NULL AUTO_INCREMENT,
    AlarmWaardeID INT,
    SoortAlarmID INT,
    vatID INT,
    GebruikerID INT,
	IsVerzondenSms BOOLEAN,
	IsVerzondenEmail BOOLEAN,
    CONSTRAINT PK_AlarmGebruiker PRIMARY KEY(AlarmGebruikerID),
    CONSTRAINT FK_AlarmGebruiker_AlarmWaarde FOREIGN KEY(AlarmWaardeID) REFERENCES AlarmWaarde(AlarmWaardeID),
    CONSTRAINT FK_AlarmGebruiker_SoortAlarm FOREIGN KEY(SoortAlarmID) REFERENCES SoortAlarm(SoortAlarmID),
    CONSTRAINT FK_AlarmGebruiker_Vat FOREIGN KEY(VatID) REFERENCES Vat(VatID),
    CONSTRAINT FK_AlarmGebruiker_Gebruiker FOREIGN KEY(GebruikerID) REFERENCES Gebruiker(PersoonID)
);

_U kan deze gebruiken om zelf uw eigen tabellen aan te maken._

Wanneer de tabellen zijn aangemaakt, kunt u er al testdata inzetten. Zo kan u delen van de applicatie testen zonder dat het gedeelte van de sensoren ingesteld moet zijn.

Volgende SQL code zorgt voor het invoeren van testdata:

INSERT
INTO
    Gebruiker(
        Naam,
        Wachtwoord,
        Email,
        TelNummer,
        IsAdmin
    )
VALUES(
    "Admin",
    "Admin123",
    "Admin@live.com",
    "0483666666",
    TRUE
),(
    "WijnBoer",
    "wijnboer123",
    "wijnboer@live.com",
    "0483555555",
    FALSE
);


INSERT
INTO
    SoortAlarm
VALUES(1, "SMS"),(2, "Email");


INSERT
INTO
    SoortMeting(Naam)
VALUES("temperatuur"),("alcohol"),("druk"),("CO2"),("Ph"),("Troebelheid");


INSERT
INTO
    SoortActie (Naam)
VALUES("toevoegen"),("overhevelen"),("afkoelen in diepvries"),("afkoelen in koelkast");

INSERT
INTO
    Programma
VALUES(
    1,
    "Pers & push",
    "Ca. 70 Liter",
    "1,2 Bar"
);


INSERT
INTO
    Druif(Naam)
VALUES("Cabernet Sauvignon"),("Airén"),("Merlot"),("Chardonnay"),("Sauvignon Blanc"),("Pinot Noir");


INSERT
INTO
    Vat
VALUES(1, "Tank 1", "110 Kg", FALSE, 1, 6,100,NULL,TRUE);


INSERT
INTO
    Actie
VALUES(
    1,
    "Gist",
    NOW(), 1, 1, 1, "10 gram Gist");


INSERT
INTO
    Sensor
VALUES(1, "Temperatuur Meten", 1),(2, "Ph Meten", 5);


INSERT
INTO
    AlarmWaarde
VALUES(1, 1, 1, 31.5);

INSERT
INTO
    AlarmGebruiker
VALUES(1, 1, 1, 1, 1,FALSE,NULL);

INSERT
INTO
    AutomatischeMeting(
        Tijdstempel,
        VatID,
        SensorID,
        Waarde
    )
VALUES(
    ADDTIME(NOW(), '01:00:00'), 1, 1, 18),
    (
        ADDTIME(NOW(), '02:00:00'), 1, 1, 20),
        (
            ADDTIME(NOW(), '08:00:00'), 1, 1, 38)

_U kan deze gebruiken om zelf uw tabellen op te vullen._

## Configuratie Grafana

Voordat u alle functionaliteiten van Grafana kunt gebruiken in de applicatie, moeten nog enkele configuraties aangepast worden.

Deze instellingen dienen aangemaakt te worden in de configuratiefile van Grafana. Deze kunt u vinden op de plaats waar u Grafana geïnstalleerd hebt. Deze file heeft als extensie '.ini'.

### Auth.anonymous

enabled false --> veranderen naar 'enabled true'

### Auth.Proxy

enabled false --> veranderen naar 'enabled true'

### Security

allow_embedding false --> veranderen naar 'allow_embedding true'

U kan controleren of de instellingen juist zijn aangepast door in de webinterface van Grafana naar het volgende te gaan: 'server admin -> settings'. Hier zult u een lijst vinden van alle settings en configuraties van Grafana.

_de webinterface bereikt u in uw browser via 'http://host-ip:3000'_

![Grafana_settings](/{{site.RepoName}}/media/bi/grafana-settings.png)

## Datasource instellen

Voordat u begint te werken met uw eigen database, moet u het juiste pad instellen zodat de applicatie verbinding kan maken met de gemeten data.

Dit kan onder het menu 'Configuration -> Data Sources'. Hier maakt u een nieuwe datasource.

Bij 'MySQL Connection' vul je het volgende in: 
```
Host: ip adres van de database
Database: naam van de database
User: gebruikersnaam om in te loggen
Paswoord: paswoord van deze gebruiker
```

## Visualisatie maken

Eerst klikt u in het menu p het + icoontje. Vervolgens kiest u voor 'new dashboard'. Om een grafiek toe te voegen, klikt u bovenaan de pagina op 'add panel' ![Grafana-add](/{{site.RepoName}}/media/bi/grafana-add.png)

Een nieuw paneel zal verschijnen. Wanneer u op 'choose visualisation' klikt, kunt u de keuze maken tussen een reeks grafieken om uw data te tonen. Als u deze selecteert, zullen er allerlei opties verschijnen om de grafiek verder te personaliseren.

Als u met uw eigen data source wilt werken, moet u op het linkse icoontje klikken:
![Grafana-icoon](/{{site.RepoName}}/media/bi/grafana-icoon.png)
Vervolgens kiest u in het Query veld in de drop down list de data source die je net aangemaakt hebt.

De app zal er als volgt uitzien:

![Grafana-query](/{{site.RepoName}}/media/bi/grafana-query.png)

Je kan deze blokken slepen en toevoegen om zo het achterliggende SQL-script aan te passen. In het project hebben we ervoor gekozen om dit zelf te schrijven. Dit kunt u doen door onderaan op de blok 'Edit SQL' te klikken. Nu kunt u aan de hand van SQL queries de grafiek aanpassen. Bijvoorbeeld:

![Grafana-sql](/{{site.RepoName}}/media/bi/grafana-sql.png)

Verder op de knop van general kunt u de naam en descriptie van deze grafiek aanpassen.

![Grafana-general](/{{site.RepoName}}/media/bi/grafana-general.png)

Wanneer je een paneel toevoegt of bewerkt, is het altijd belangrijk om alles op te slaan door rechtsboven de pagina op het volgende icoon te klikken: 
![Grafana-opslaan](/{{site.RepoName}}/media/bi/grafana-opslaan.png)

Ten slotte kunt u ook nog het tijdslot kiezen vanaf wanneer je data wilt zien. Alle data dat buiten dit slot valt, zal niet getoond worden.
![Grafana-tijdslot](/{{site.RepoName}}/media/bi/grafana-tijdslot.png)

## Panelen exporteren naar website

We hebben voor ons project bewust gekozen voor Grafana omdat deze het zeer eenvoudig maakt om uw visualisaties te exporteren. Wanneer je op de titel van een paneel klikt, zal een menu tevoorschijn komen. Hier kiest u voor 'share':
![Grafana-share](/{{site.RepoName}}/media/bi/grafana-share.png)

Er zal een nieuw venster te zien zijn met verschillende opties om het paneel te delen. Kies hier bovenaan voor de optie 'embed'. De code die tevoorschijn komt, kan rechtstreeks in het html-gedeelte van de website gekopieerd worden zoals hieronder getoond. De huidige instellingen van dit paneel zullen allemaal mee overgedragen worden naar het paneel in de web applicatie. Het zal dus ook updaten om dezelfde ingestelde intervallen.
![Grafana-delen](/{{site.RepoName}}/media/bi/grafana-delen.png)

![Grafana-web](/{{site.RepoName}}/media/bi/grafana-web.png)









{% include footer.html %}
