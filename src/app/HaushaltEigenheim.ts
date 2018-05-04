export interface Risikoadresse {
  ID: number;
  RisikoNameIsVN: string;
  Strasse: string;
  Hausnummer: string;
  Land: string;
  Plz: string;
  Ort: string;
  Anrede: number;
  Titel: string;
  Vorname: string;
  Nachname: string;
  Geburtsdatum: string;
  Alter: string;
  SVAnstalt: string;
  SVNummer: string;
  Beruf: string;
  IsBerufArtDerBeschaeftigung: number;
  Berufsbezeichnung: string;
}

export interface ZusatzPrivatHaftpflichtPersonen {
  ID: number;
  HaushaltHaftpflicht_Name: string;
  HaushaltHaftpflicht_Datum: string;
}

export interface ZusatzHaftpflichtHunde {
  ID: number;
  Hundehaftpflicht_Name: string;
  Hundehaftpflicht_Rasse: string;
}

export interface ZusatsdeckungAusschlussHaushalt {
  ID: number;
  IsHaushaltGrobeFahrlaessigkeit: number;
  IsHaushaltHeizungskasko: number;
  IsHaushaltAusschlussGlasbruch: number;
  IsHaushaltZuschlagUnbewohntAusserhalb: number;
  IsHaushaltErhoehungAufWert: number;
  HaushaltErhoehungAufWert_VS: string;
  IsHaushaltAlarmanlage: number;
  IsHaushaltSelbstbehalt: number;
  IsHaushaltPrivathaftpflicht: number;
  AnzahlAusdehnungPerson: number;
  ZusatzPrivatHaftpflichtPersonen: ZusatzPrivatHaftpflichtPersonen[];
  IsHaushaltHundehaftpflicht: number;
  AnzahlHundeHaftpflicht: number;
  ZusatzHaftpflichtHunde: ZusatzHaftpflichtHunde[];
}

export interface PraemienHaushalt {
  ID: number;
  VS: string;
  VSHaushalt: string;
  IsVSHaushaltIndividuell: number;
  VSHaushaltIndividuell: string;
  PraemieBasis: string;
  Praemie_UnbewohntAussen: string;
  Praemiensumme: string;
  Praemie_GrobeFahrlaessigkeit: string;
  Praemie_AusschlussGlasbruch: string;
  Praemie_Sicherungstuer: string;
  Praemie_Alarmanlage: string;
  Praemie_Heizungskasko: string;
  Praemie_Safetypackage: string;
  Praemie_AusdehnungPrivathaftpflicht: string;
  Praemie_AusdehnungHundehaftpflicht: string;
  Praemie_AusdehnungTierhaftpflicht: string;
  Praemie_PremiumPrivatHaftpflicht: string;
  Praemie_Sengschaeden: string;
  Praemie_Wasseraustritt: string;
  Praemie_Rasenroboter: string;
  Praemie_ErhoehungGrenzbetragBargeld: string;
  Praemie_ErhoehungGrenzbetragSchmuck: string;
  Praemie_Geldschrank: string;
  Praemie_ErhoehungAufWert: string;
  Praemie_Selbstbehalt: string;
  Praemie_Buendelrabatt: string;
  Praemie_Gesamt: string;
  IsMindestpraemie: number;
}

export interface HaushaltDaten {
  ID: number;
  Tarif: string;
  Tarif_IsHochwasserpaket: number;
  Wohnnutzflaeche: string;
  Haustyp: number;
  IsStaendigBewohnt: number;
  VerbautesOrtsgebiet: number;
  Ausstattung: number;
  HasZusaetzlicheVn: number;
  ZusaetzlicheVn_Name1: string;
  ZusaetzlicheV_GebDat1: string;
  ZusaetzlicheVn_Name2: string;
  ZusaetzlicheV_GebDat2: string;
  ZusaetzlicheVn_Name3: string;
  ZusaetzlicheV_GebDat3: string;
  ZusaetzlicheVn_Name4: string;
  ZusaetzlicheV_GebDat4: string;
  BerechnungsgrdlgPraemie: string;
  BerechnungsgrdlgVS: string;
  ZusatsdeckungAusschlussHaushalt: ZusatsdeckungAusschlussHaushalt;
  PraemienHaushalt: PraemienHaushalt;
}

export interface ZusatzHaftpflichtHunde2 {
  ID: number;
  Hundehaftpflicht_Name: string;
  Hundehaftpflicht_Rasse: string;
}

export interface ZusatsdeckungAusschlussEigenheim {
  ID: number;
  IsEigenheimGrobeFahrlaessigkeit: number;
  IsEigenheimHeizungskasko: number;
  IsEigenheimBauherrnhaftpflicht: number;
  EigenheimBauherrnhaftpflicht_Baukosten: string;
  IsEigenheimSwimmingpoolpaket: number;
  EigenheimSwimmingpoolpaket: string;
  IsEigenheimSelbstbehalt: number;
  IsEigenheimHundehaftpflicht: number;
  AnzahlHundeHaftpflicht: number;
  ZusatzHaftpflichtHunde: ZusatzHaftpflichtHunde2[];
}

export interface PraemienEigenheim {
  ID: number;
  VS_Hauptgebaeude: string;
  VS_Nebengebaeude: string;
  IsVSHaubtIndividuell: number;
  VSHaubtIndividuell: string;
  IsVSNebenIndividuell: number;
  VSNebenIndividuell: string;
  Praemie_Hauptgebaeude: string;
  Praemie_Nebengebaeude: string;
  Praemie_TopSchutz130: string;
  Praemiensumme: string;
  Praemie_GrobeFahrlaessigkeit: string;
  Praemie_Heizungskasko: string;
  Praemie_Bauherrnhaftpflicht: string;
  Praemie_Gebaeudeglas: string;
  Praemie_AusdehnungHundehaftpflicht: string;
  Praemie_AusdehnungTierhaftpflicht: string;
  Praemie_Swimmingpoolpaket: string;
  Praemie_PremiumEigenheimHaftpflicht: string;
  Praemie_EigenheimPlus: string;
  Praemie_Wasseraustritt: string;
  Praemie_Selbstbehalt: string;
  Praemie_Buendelrabatt: string;
  Praemie_Gesamt: string;
  IsMindestpraemie: number;
}

export interface EigenheimDaten {
  ID: number;
  Tarif: string;
  Tarif_IsHochwasserpaket: number;
  IsRohbauversicherung: number;
  VerbauteFlaecheKeller: string;
  VerbauteFlaecheErdgeschoss: string;
  VerbauteFlaecheObergeschoss1: string;
  VerbauteFlaecheObergeschoss2: string;
  VerbauteFlaecheMansarde: string;
  HasNebengebaeude: number;
  VerbauteFlaecheNebengebaeude: string;
  HasNebengebaeudeKeller: number;
  BerechnungsgrdlgPraemie: string;
  BerechnungsgrdlgVS: string;
  ZusatsdeckungAusschlussEigenheim: ZusatsdeckungAusschlussEigenheim;
  PraemienEigenheim: PraemienEigenheim;
}

export interface EigenheimeHaushalte {
  ID: number;
  Klasse: number;
  IsNeukunde: number;
  ErsatzvertragPolizzennummer: string;
  ErsatzvertragVersicherungsende: string;
  IsAbgelehnt: number;
  AbgelehntGrund: string;
  AbgelehntUnternehmen: string;
  IsSchaedenEreignet: number;
  SchaedenEreignetDatum: string;
  SchaedenEreignetUrsache: string;
  SchaedenEreignetEntschaedigungDurch: string;
  SchaedenEreignetBetrag: string;
  IsSchaeden: number;
  SchaedenWelche: string;
  IsVersicherung: number;
  VersicherungUnternehmen: string;
  IsLandwirtschaftGewerbe: number;
  IsGefaehrdung: number;
  IsGefaehrdungUeberschwemmung: number;
  IsGefaehrdungVermurung: number;
  IsGefaehrdungLawine: number;
  IsBetroffen: number;
  IsVinkulierung: number;
  VinkulierungNameAnschrift: string;
  VinkulierungSparte: string;
  VinkulierungGeschaeftszahl: string;
  IsBuendelrabatt: number;
  AnzahlHundeHaftpflichtGesamt: number;
  AnzahlTierHaftplichtGesamt: number;
  IsRisikoadresse: number;
  Risikoadresse: Risikoadresse;
  IsActiveHaftpflicht: number;
  IsHaushaltHundehaftpflicht: number;
  IsEigenheimHundehaftpflicht: number;
  IsHaushaltTierhaftpflicht: number;
  IsEigenheimTierhaftpflicht: number;
  HaushaltDaten: HaushaltDaten;
  EigenheimDaten: EigenheimDaten;
}
