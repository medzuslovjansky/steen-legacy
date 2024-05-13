/***** Slovianski header *****/

function header (lang, level)
{
  document.write('<div id="header"><table width="100%"><tr>');
  document.write('<th align="left" style="float: left; display: inline-block;">');
  document.write('<div class="is">Interslavic language</div>');
  document.write('<div class="ms">Medžuslovjansky jezyk — Меджусловjaнскы jезык</div></th>');
  document.write('<th align=right style="float: right; display: inline-block; padding-right: 10px;">');
  document.write('<a href="flags.html"><img src="./images/flag_slovianski_209.svg">');
  document.write('<img src="./images/flag_slovioski_276.svg">');
  document.write('<img src="./images/flag_ns_213.svg">');
  document.write('<img src="./images/flag_panslavic.svg"></a></th>');
  document.write('</center></table></div>');
  document.write('<table width="100%"><tr style="vertical-align:top;"><td width="280px">');

/***** Menu *****/

bgz = '<tr><td><a href="';
tit = '" title="';
div = '"><div>';
slz = '</div></a></td></tr>';
bgu = '<tr><td><div onmouseover="klapuit (';
mout = ');" onmouseout="klapin (';
arf = ');"><a href="';
slu = '</div></a>';
ukop1 = '<div id='
ukop2 = ' style="display:none;" class="clLevel0"><table cellspacing="0">';
uvoet = '</table></div></div></td></tr>';

lk1 = 'index.html'; al1 = 'Glavna stranica | Главна страница'; 	nm1 = 'Main Page';				cd1 = "'main'";
	lk1a = 'index.html'; 					nm1a = 'Main Page';
	lk1b = 'toc.html'; 					nm1b = 'Table of contents';

lk2 = ''; al2 = 'Vvedenje | Введенје'; 				nm2 = 'Introduction'; 				cd2 = "'intro'";
	lk2a = 'introduction.html'; 				nm2a = 'Introduction'; 				cd2a = "'intro1'";
		lk2aa = lk2a + '#whatis'; 			nm2aa = 'What is Interslavic?';
		lk2ab = lk2a + '#purpose'; 			nm2ab = 'Purpose';
		lk2ac = lk2a + '#heterogeneous'; 		nm2ac = 'A heterogeneous language';
		lk2ad = lk2a + '#classification';		nm2ad = 'Classification';
		lk2ae = lk2a + '#naturalism'; 			nm2ae = 'Naturalism and flexibility'; 
		lk2af = lk2a + '#name'; 			nm2af = 'The name &#8222;Medžuslovjansky&#8221;';
		lk2ag = lk2a + '#team'; 			nm2ag = 'Our team';
		lk2ah = lk2a + '#disclaimer'; 			nm2ah = 'Disclaimer';
	lk2b = 'design_criteria.html'; 				nm2b = 'Design criteria'; 			cd2b = "'dcrit'";
		lk2ba = lk2b + '#phonology_and_writing'; 	nm2ba = 'Phonology and writing';
		lk2bb = lk2b + '#vocabulary'; 			nm2bb = 'Vocabulary'; 				cd2bb = "'dcrit1'";
			lk2bb1 = lk2b + '#international_vs_slavic'; nm2bb1 = 'International versus Slavic'; 
			lk2bb2 = lk2b + '#roots'; 		nm2bb2 = 'Which roots to use?'; 
			lk2bb3 = lk2b + '#false_friends'; 	nm2bb3 = 'False friends'; 
			lk2bb4 = lk2b + '#neologisms'; 		nm2bb4 = 'Neologisms'; 
			lk2bb5 = lk2b + '#how_to_establish'; 	nm2bb5 = 'How to establish the right form?';
		lk2bc = lk2b + '#grammar'; 			nm2bc = 'Grammar';				cd2bc = "'dcrit2'";
			lk2bc1 = lk2b + '#grammar_level_1'; 	nm2bc1 = 'Simple level'; 
			lk2bc2 = lk2b + '#grammar_level_2'; 	nm2bc2 = 'Advanced level'; 
	lk2c = 'history.html'; 					nm2c = 'History of Interslavic'; 
	lk2d = 'constructed_slavic_languages.html'; 		nm2d = 'Constructed Slavic languages'; 		cd2d = "'csl'";
		lk2da = 'constructed_slavic_languages.html'; 	nm2da = 'Constructed Slavic languages';
		lk2db = 'numbers_1-10.html'; 			nm2db = 'The numbers 1-10 in Slavic languages';
		lk2dc = 'relay.html'; 				nm2dc = 'The Pan-Slavic Relay: Naše selo';
		lk2dd = 'slavic_pronouns.html'; 		nm2dd = 'Slavic personal pronouns';
	lk2e = 'faq.html'; 					nm2e = 'FAQ'; 					cd2e = "'faq'";
		lk2ea = 'faq.html#how-to-learn'; 		nm2ea = 'How to learn and use Interslavic?';
		lk2eb = 'faq.html#all-slavs'; 			nm2eb = 'Can all Slavs understand it?';
		lk2ec = 'faq.html#how-many'; 			nm2ec = 'How many people speak it?';
		lk2ed = 'faq.html#latin-or-cyrillic'; 		nm2ed = 'Latin or Cyrillic?';
		lk2ee = 'faq.html#keyboard'; 			nm2ee = 'How can I write Interslavic on my own keyboard?';
		lk2ef = 'faq.html#characters'; 			nm2ef = 'What are those weird characters?';
		lk2eg = 'faq.html#glagolitic'; 			nm2eg = 'Ⰿⰵⰴⰶⱆⱄⰾⱁⰲⱑⱀⱄⰽⱏⰹ ⱗⰸⱏⰹⰽ???';
		lk2eh = 'faq.html#word'; 			nm2eh = 'Help! I can’t find a word!';
		lk2ei = 'faq.html#english'; 			nm2ei = 'Interslavic and ...'; 			cd2ei = "'faq1'";	
			lk2ei1 = 'faq.html#english'; 		nm2ei1 = '... English';
			lk2ei2 = 'faq.html#russian'; 		nm2ei2 = '... Russian';
			lk2ei3 = 'faq.html#esperanto'; 		nm2ei3 = '... Esperanto';
			lk2ei4 = 'faq.html#slovio'; 		nm2ei4 = '... Slovio';
			lk2ei5 = 'faq.html#ocs'; 		nm2ei5 = '... Old Church Slavonic';

lk3 = 'orthography.html'; al3 = 'Pravopis | Правопис'; 		nm3 = 'Orthography'; cd3 = "'ortho'";
	lk3a = lk3 + '#standard_alphabet'; 			nm3a = 'Standard alphabet';
	lk3b = lk3 + '#representation'; 			nm3b = 'Representation of problematic characters';
	lk3c = lk3 + '#etymological_alphabet'; 			nm3c = 'Etymological alphabet';
	lk3d = lk3 + '#overview'; 				nm3d = 'Overview';
	lk3e = lk3 + '#guidelines'; 				nm3e = 'Guidelines';

lk4 = 'phonology.html'; al4 = 'Fonologija | Фонологија'; 	nm4 = 'Phonology'; 				cd4 = "'phono'";
	lk4a = lk4 + '#phonemes'; 				nm4a = 'Phoneme inventory'; 			cd4a = "'phono1'";
		lk4a1 = lk4 + '#vowels'; 			nm4a1 = 'Vowels'; 
		lk4a2 = lk4 + '#consonants'; 			nm4a2 = 'Consonants';
	lk4b = lk4 + '#hard_and_soft'; 				nm4b = 'Hard and soft consonants';
	lk4c = lk4 + '#phonotactics'; 				nm4c = 'Phonotactics';
	lk4d = lk4 + '#alternations'; 				nm4d = 'Morphophonemic alternations'; 		cd4d = "'phono2'";
		lk4d1 = lk4 + '#palatalisation'; 		nm4d1 = 'Palatalisation'; 
		lk4d2 = lk4 + '#iotation'; 			nm4d2 = 'Iotation'; 
		lk4d3 = lk4 + '#o'; 				nm4d3 = 'O > E'; 
		lk4d4 = lk4 + '#y'; 				nm4d4 = 'Y > E/I'; 
		lk4d5 = lk4 + '#ě'; 				nm4d5 = 'Ě > I'; 
		lk4d6 = lk4 + '#fleeting'; 			nm4d6 = 'Fleeting o/e'; 

lk5 = 'pronunciation.html'; al5 = 'Izgovor | Изговор'; 		nm5 = 'Pronunciation'; 				cd5 = "'pron'";
	lk5a = lk5 + '#overview'; 				nm5a = 'Overview';
	lk5b = lk5 + '#extensions'; 				nm5b = 'Etymological extensions';
	lk5c = lk5 + '#stress'; 				nm5c = 'Stress';
	lk5d = lk5 + '#remark'; 				nm5d = 'General remark';

lk6 = 'grammar.html'; al6 = 'Gramatika | Граматика'; 		nm6 = 'Grammar'; 				cd6 = "'gram'";
	lk6a = lk6 + '#simple_grammar';				nm6a = 'Simple (Slovianto)'; 			cd6a = "'santo'";
		lk6aa = 'slovianto1.html'; 			nm6aa = 'Level 1';
		lk6ab = 'slovianto2.html'; 			nm6ab = 'Level 2';
		lk6ac = 'slovianto3.html'; 			nm6ac = 'Level 3';
	lk6b = lk6 + '#advanced_grammar'; 			nm6b = 'Advanced (Interslavic)'; 		cd6b =  "'grammar'"; 
		lk6ba = 'nouns.html'; 				nm6ba = 'Nouns'; 				cd6ba = "'grammar1'";
			lk6ba1 = lk6ba + '#masculine'; 		nm6ba1 = 'Masculine declension';
			lk6ba2 = lk6ba + '#neuter'; 		nm6ba2 = 'Neuter declension';
			lk6ba3 = lk6ba + '#feminine'; 		nm6ba3 = 'Feminine declension';
			lk6ba4 = lk6ba + '#athematic'; 		nm6ba4 = 'Athematic declension';
			lk6ba5 = lk6ba + '#irregular'; 		nm6ba5 = 'Irregular nouns';
			lk6ba6 = lk6ba + '#indeclinable'; 	nm6ba6 = 'Indeclinable nouns';
		lk6bb = 'adjectives.html'; 			nm6bb = 'Adjectives'; 				cd6bb = "'grammar2'" 
			lk6bb1 = lk6bb + '#inflection'; 	nm6bb1 = 'Inflection';
			lk6bb2 = lk6bb + '#short_form'; 	nm6bb2 = 'Short form';
			lk6bb3 = lk6bb + '#adverbs'; 		nm6bb3 = 'Adverbs';
			lk6bb4 = lk6bb + '#comparison'; 	nm6bb4 = 'Comparison';
		lk6bc = 'pronouns.html'; 			nm6bc = 'Pronouns'; 				cd6bc = "'grammar3'";
			lk6bc1 = lk6bc + '#personal'; 		nm6bc1 = 'Personal pronouns';
			lk6bc2 = lk6bc + '#personal'; 		nm6bc2 = 'Reflexive/reciprocal pronouns';
			lk6bc3 = lk6bc + '#possessive'; 	nm6bc3 = 'Possessive pronouns';
			lk6bc4 = lk6bc + '#demonstrative'; 	nm6bc4 = 'Demonstrative pronouns';
			lk6bc5 = lk6bc + '#relative'; 		nm6bc5 = 'Relative pronouns';
			lk6bc6 = lk6bc + '#interrogative'; 	nm6bc6 = 'Interrogative pronouns';
			lk6bc7 = lk6bc + '#indefinite'; 	nm6bc7 = 'Indefinite pronouns';
			lk6bc8 = lk6bc + '#pronominal_adverbs'; nm6bc8 = 'Pronominal adverbs';
		lk6bd = 'numerals.html'; 			nm6bd = 'Numerals'; 				cd6bd = "'grammar4'";
			lk6bd1 = lk6bd + '#cardinal'; 		nm6bd1 = 'Cardinal numbers';
			lk6bd2 = lk6bd + '#ordinal'; 		nm6bd2 = 'Ordinal numbers';
			lk6bd3 = lk6bd + '#fractions'; 		nm6bd3 = 'Fractions';
			lk6bd4 = lk6bd + '#collective'; 	nm6bd4 = 'Collective numbers';
			lk6bd5 = lk6bd + '#multiplicative'; 	nm6bd5 = 'Multiplicative numbers';
			lk6bd6 = lk6bd + '#differential';	nm6bd6 = 'Differential numbers';
			lk6bd7 = lk6bd + '#substantivised'; 	nm6bd7 = 'Substantivised numbers';
			lk6bd8 = lk6bd + '#twin_births'; 	nm6bd8 = 'Twin births';
		lk6be = 'verbs.html'; 				nm6be = 'Verbs'; 				cd6be = "'grammar5'";
			lk6be1 = lk6be + '#aspect'; 		nm6be1 = 'Aspect';
			lk6be2 = lk6be + '#conjugation'; 	nm6be2 = 'Conjugation';
			lk6be3 = lk6be + '#stems'; 		nm6be3 = 'Stems';
			lk6be5 = lk6be + '#present_tense';	nm6be5 = 'Present tense';
			lk6be6 = lk6be + '#past_tense';		nm6be6 = 'Past tense';
			lk6be7 = lk6be + '#future_tense';	nm6be7 = 'Future tense';
			lk6be8 = lk6be + '#imperative';		nm6be8 = 'Imperative';
			lk6be9 = lk6be + '#conditional';	nm6be9 = 'Conditional';
			lk6be10 = lk6be + '#participles';	nm6be10 = 'Participles';
			lk6be11 = lk6be + '#passive_voice';	nm6be11 = 'Passive voice';
			lk6be12 = lk6be + '#irregular_verbs';	nm6be12 = 'Irregular verbs';			cd6be12 = "'grammar5a'";
			  lk6be12a = lk6be + '#byti';		nm6be12a = 'Byti';
			  lk6be12b = lk6be + '#athematic';	nm6be12b = 'Dati, jesti, věděti';
			  lk6be12c = lk6be + '#idti';		nm6be12c = 'Idti';
		lk6bf = 'prepositions.html'; 			nm6bf = 'Prepositions';
		lk6bg = 'conjunctions.html'; 			nm6bg = 'Conjunctions';
		lk6bh = 'syntax.html'; 				nm6bh = 'Syntax';

lk7 = ''; al7 = 'Slovosbor | Словосбор'; 			nm7 = 'Vocabulary'; 				cd7 = "'vocab'";
	lk7a = 'word_formation.html'; 				nm7a = 'Word formation'; 			cd7a = "'forma'";
		lk7a1 = lk7a + '#suffixes'; 			nm7a1 = 'Suffixes';
		lk7a2 = lk7a + '#prefixes'; 			nm7a2 = 'Prefixes';
		lk7a3 = lk7a + '#compound_words'; 		nm7a3 = 'Compound words';
	lk7b = 'derivation.html'; 				nm7b = 'Derivation of words'; 			cd7b = "'deriv'";
		lk7b1 = lk7b + '#protoslavic'; 			nm7b1 = 'Proto-Slavic';
		lk7b2 = lk7b + '#international'; 		nm7b2 = 'International vocabulary';
	lk7c = 'flavorizacija.html'; 				nm7c = 'Flavourisation';			cd7c = "'flav'";
		lk7c1 = lk7c + '#dialects'; 			nm7c1 = 'Interslavic dialects'; 
		lk7c2 = lk7c + '#pronunciation'; 		nm7c2 = 'In pronunciation'; 
		lk7c3 = lk7c + '#spelling'; 			nm7c3 = 'In spelling'; 
		lk7c4 = lk7c + '#examples'; 			nm7c4 = 'Examples'; 

lk8 = 'dynamic_dictionary.html'; al8 = 'Slovniky | Словникы'; nm8 = 'Dictionaries'; 				cd8 = "'dicts'";
	lk8a = 'dynamic_dictionary.html'; 			nm8a = 'Dynamic dictionary EN/ISV';
	lk8b = 'slownik_dynamiczny.html'; 			nm8b = 'Słownik dynamiczny PL/ISV';
	lk8c = 'https://interslavic-dictionary.com/'; 		nm8c = 'Multilingual dictionary';
	lk8d = 'en-ms.html'; 					nm8d = 'English-Interslavic'; 
	lk8e = 'ms-en.html'; 					nm8e = 'Medžuslovjansko-Anglijsky'; 
	lk8f = 'msc-en.html'; 					nm8f = 'Меджусловјанско-Англијскы';
	lk8g = 'pl-ms.html'; 					nm8g = 'Polsko-Międzysłowiański'; 
	lk8h = 'ms-pl.html'; 					nm8h = 'Medžuslovjansko-Poljsky'; 
	lk8i = 'msc-pl.html'; 					nm8i = 'Меджусловјанско-Польскы'; 

lk9 = ''; al9 = 'Materialy | Материалы'; 			nm9 = 'Materials'; 				cd9 = "'mater'";
	lk9a = 'samples.html'; 					nm9a = 'Sample texts'; 				cd9a = "'texts'";
		 lk9aa = 'otcze_nasz.html'; 			nm9aa = 'Otče naš';
		 lk9ab = 'babel_text.html'; 			nm9ab = 'Věža Babelja';
		 lk9ac = 'wren.html'; 				nm9ac = 'Strižik';
		 lk9ad = 'northwind.html'; 			nm9ad = 'Sěverny větr i solnce';
		 lk9ae = 'selo.html'; 				nm9ae = 'Naše selo';
		 lk9af = 'declaration.html'; 			nm9af = 'UDHR, art. 1';
		 lk9ag = 'jokes.html'; 				nm9ag = 'Tri směšky';
		 lk9ah = 'news_2006.html'; 			nm9ah = 'Četyri novosti iz 2006';
		 lk9ai = 'zalozsenija.html'; 			nm9ai = 'Založenja za medžuslovjansky jezyk';
		 lk9aj = 'umetny_ili_prirodny.html'; 		nm9aj = 'Umětny jezyk ili prirodny?';
		 lk9ak = 'piron.html'; 				nm9ak = 'Psihologične reakcije';
		 lk9al = 'memorandum.html'; 			nm9al = 'Memorandum';
	lk9b = ''; 						nm9b = 'Books'; 				cd9b = "'books'";
		lk9ba = 'maly_princ.html'; 			nm9ba = 'Maly Princ';
		lk9bb = 'https://books.google.nl/books?id=i3lhDwAAQBAJ'; nm9bb = 'Čitateljnik (anthology)';
		lk9bc = 'https://books.google.nl/books?id=egpTDwAAQBAJ'; nm9bc = 'Interslavic zonal constructed language: an introduction for English-speakers';
	lk9c = 'http://www.neoslavonic.org'; 			nm9c = 'Tutorial';
	lk9d = 'http://slovjani.info';	 			nm9d = 'Slovjani.info';
	lk9e = 'youtube.html'; 					nm9e = 'Youtube'; 				cd9e = "'youtube'";
		lk9ea = lk9e + '#painted_bird'; 		nm9ea = 'The Painted Bird';
		lk9eb = lk9e + '#cisla'; 			nm9eb = 'CISLa conference';
		lk9ec = lk9e + '#interviews'; 			nm9ec = 'Interviews';
		lk9ed = lk9e + '#others'; 			nm9ed = 'Others about Interslavic';
		lk9ee = lk9e + '#texts'; 			nm9ee = 'Read read in Interslavic';
		lk9ef = lk9e + '#misc'; 			nm9ef = 'Other examples';
		lk9eg = lk9e + '#lyrics'; 			nm9eg = 'Lyrics';
		lk9eh = lk9e + '#subtitles'; 			nm9eh = 'Interslavic subtitles';
	lk9f = 'https://isv.miraheze.org/wiki/Sbornik:Glavna_stranica';  nm9f = 'Vikisbornik';

lk10 = 'the_painted_bird.html'; al10 = 'Kolorovana ptica | Колорована птица'; nm10 = 'The Painted Bird'; 	cd10 = "'film'";
	lk10a = lk10 + '#intro'; 				nm10a = 'Introduction';
	lk10b = lk10 + '#trailer'; 				nm10b = 'Trailer';
	lk10c = lk10 + '#fragment'; 				nm10c = 'Dialogue in Interslavic';
	lk10d = lk10 + '#coaching'; 				nm10d = 'Coaching';
	lk10e = lk10 + '#set'; 					nm10e = 'Artwork from the film';
	lk10f = lk10 + '#song'; 				nm10f = 'The song «Dušo moja»';
	lk10g = lk10 + '#press'; 				nm10g = 'Press';
	lk10h = lk10 + '#links'; 				nm10h = 'More links';

lk11 = ''; al11 = 'Orudja | Орудја'; 				nm11 = 'Tools'; 				cd11 = "'tools'";
	lk11a = 'transliterator.html'; 				nm11a = 'Transliteration tool';
	lk11b = 'transliterator_extended.html'; 		nm11b = 'Transcription tool';
	lk11c = 'spell_checker.html'; 				nm11c = 'Spell checker';
	lk11d = 'words_learning_tool.html'; 			nm11d = 'Words learning tool';
	lk11e = 'conjugator.html'; 				nm11e = 'Verb conjugator';
	lk11f = 'declinator.html'; 				nm11f = 'Noun declinator';
	lk11g = 'adjectivator.html'; 				nm11g = 'Adjective declinator';
	lk11h = 'voting_machine.html'; 				nm11h = 'Voting Machine';
	lk11i = 'veczny_kalendar.html'; 			nm11i = 'Eternal calendar';
	lk11j = 'slovniky.html'; 				nm11j = 'Online Slavic dictionaries';

lk12 = ''; al12 = 'Občina | Обчина'; 				nm12 = 'Community'; 				cd12 = "'comm'";
	lk12a = 'http://cisla.slavic-union.org/'; 		nm12a = 'Conferences';				cd12a = "'cisla'";
		lk12aa = 'http://cisla.slavic-union.org/2017/'; nm12aa = 'CISLa 2017';
		lk12ab = 'http://cisla.slavic-union.org/2018/'; nm12ab = 'CISLa 2018';
		lk12ac = 'http://cisla.slavic-union.org/2020/'; nm12ac = 'CISLa 2020';
	lk12b = 'https://isv.miraheze.org/'; 			nm12b = 'Wiki';
	lk12c = 'https://www.facebook.com/groups/interslavic/'; nm12c = 'Facebook';				
	lk12d = 'https://www.facebook.com/groups/1933305396885265/'; 	nm12d = 'Facebook (Věče)';				
	lk12e = 'http://vk.com/slovanski'; 			nm12e = 'ВКонтакте';				
	lk12f = 'https://www.tapatalk.com/groups/slovianski/'; 	nm12f = 'Forum';
	lk12g = 'https://twitter.com/MSVesti'; 			nm12g = 'Twitter (news)';
	lk12h = 'https://twitter.com/interslavic_mem'; 		nm12h = 'Twitter (memes)';
	lk12i = 'https://www.instagram.com/interslavic_memes/'; nm12i = 'Instagram (memes)';
	lk12j = 'flags.html'; 					nm12j = 'Flags';

lk13 = 'wikipedia.html'; al13 = 'Medžuslovjansky na Vikipediji | Меджусловјанскы на Википедији'; nm13 = 'Interslavic&nbsp;at&nbsp;Wikipedia'; cd13 = "'wiki'";

	lk13a = ''; nm13a = 'Slavic languages'; cd13a = "'wiki1'";
	lk13b = ''; nm13b = 'Germanic languages'; cd13b = "'wiki2'";
	lk13c = ''; nm13c = 'Romance languages'; cd13c = "'wiki3'";
	lk13d = ''; nm13d = 'Other European languages'; cd13d = "'wiki4'";
	lk13e = ''; nm13e = 'Non-European languages'; cd13e = "'wiki5'";
	lk13f = ''; nm13f = 'Constructed languages'; cd13f = "'wiki6'";

	lk13ab = 'https://ab.wikipedia.org/wiki/Аславианбжьаратәи_бызшәа'; 
	nm13ab = '<img src="images/flag_ab.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Аславианбжьаратәи бызшәа';

	lk13af = 'https://af.wikipedia.org/wiki/Interslawies'; 
	nm13af = '<img src="images/flag_af.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslawies';

	lk13als = 'https://als.wikipedia.org/wiki/Interslawische_Sprache'; 
	nm13als = '<img src="images/flag_lc.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslawischi Schproch';

	lk13am = 'https://am.wikipedia.org/wiki/ኢንተርስላቪክ'; 
	nm13am = '<img src="images/flag_et.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> ኢንተርስላቪክ';

	lk13an = 'https://an.wikipedia.org/wiki/Idioma_intereslau'; 
	nm13an = '<img src="images/flag_an.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Idioma intereslau';

	lk13ar = 'https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D8%A7%D9%81%D9%88%D9%86%D9%8A%D8%A9_%D9%83%D9%86%D8%B3%D9%8A%D8%A9'; 
	nm13ar = '<img src="images/flag_ar.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> سلافونية كنسية';

	lk13ast = 'https://ast.wikipedia.org/wiki/Idioma_intereslavu'; 
	nm13ast = '<img src="images/flag_ast.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Idioma intereslavu';

	lk13avk = 'https://avk.wikipedia.org/wiki/Walslavava'; 
	nm13avk = '<img src="images/flag_avk.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Walslavava';

	lk13az1 = 'https://az.wikipedia.org/wiki/Slavyanlararası_dil'; 
	nm13az1 = '<img src="images/flag_az.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Slavyanlararası dil';

	lk13az2 = 'https://az.wikipedia.org/wiki/%C3%9Cmumslavyan_dili'; 
	nm13az2 = '<img src="images/flag_az.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Ümumslavyan dili';

	lk13id = 'https://id.wikipedia.org/wiki/Bahasa_Interslavia'; 
	nm13id = '<img src="images/flag_id.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Bahasa Interslavia';

	lk13by = 'https://be.wikipedia.org/wiki/Міжславянская_мова'; 
	nm13by = '<img src="images/flag_by.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Міжславянска мова';

	lk13be = 'https://be-tarask.wikipedia.org/wiki/Міжславянская_мова'; 
	nm13be = '<img src="images/flag_be.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Міжславянска мова';

	lk13bs = 'https:/bs.wikipedia.org/wiki/Мeđuslavenski_jezik'; 
	nm13bs = '<img src="images/flag_bih.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Međuslavenski jezik';

	lk13bg = 'https://bg.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D1%81%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D1%81%D0%BA%D0%B8_%D0%B5%D0%B7%D0%B8%D0%BA'; 
	nm13bg = '<img src="images/flag_bg.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Междуславянски език';

	lk13ca = 'https://ca.wikipedia.org/wiki/Intereslau'; 
	nm13ca = '<img src="images/flag_ca.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Intereslau';

	lk13cs = 'https://cs.wikipedia.org/wiki/Mezislovanština'; 
	nm13cs = '<img src="images/flag_cz.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Mezislovanština';

	lk13cy = 'https://cy.wikipedia.org/wiki/Rhyngslafeg'; 
	nm13cy = '<img src="images/flag_cy.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Rhyngslafeg';

	lk13de = 'https://de.wikipedia.org/wiki/Interslawische_Sprache'; 
	nm13de = '<img src="images/flag_de.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslawische Sprache';

	lk13dsb = 'https://dsb.wikipedia.org/wiki/Mjazys%C5%82owja%C5%84%C5%A1%C4%87ina'; 
	nm13dsb = '<img src="images/flag_dsb.gif" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Mjazysłowjańšćina';

	lk13ee = 'https://et.wikipedia.org/wiki/Interslaavi_keel'; 
	nm13ee = '<img src="images/flag_ee.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslaavi keel';

	lk13el = 'https://el.wikipedia.org/wiki/%CE%94%CE%B9%CE%B1%CF%83%CE%BB%CE%B1%CE%B2%CE%B9%CE%BA%CE%AE_%CE%B3%CE%BB%CF%8E%CF%83%CF%83%CE%B1'; 
	nm13el = '<img src="images/flag_gr.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Διασλαβική γλώσσα';

	lk13en = 'https://en.wikipedia.org/wiki/Interslavic'; 
	nm13en = '<img src="images/flag_en.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavic language';

	lk13sim = 'https://simple.wikipedia.org/wiki/Interslavic_language'; 
	nm13sim = '<img src="images/flag_en.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavic language (simple)';

	lk13eo = 'https://eo.wikipedia.org/wiki/Interslava_lingvo'; 
	nm13eo = '<img src="images/flag_eo.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslava lingvo';

	lk13es = 'https://es.wikipedia.org/wiki/Idioma_intereslavo'; 
	nm13es = '<img src="images/flag_es.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Idioma intereslavo';

	lk13fa = 'https://fa.wikipedia.org/wiki/%D8%B2%D8%A8%D8%A7%D9%86_%D8%A8%DB%8C%D9%86%E2%80%8C%D8%A7%D8%B3%D9%84%D8%A7%D9%88%DB%8C'; 
	nm13fa = '<img src="images/flag_fa.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> زبان بین‌اسلاوی';

	lk13fi = 'https://fi.wikipedia.org/wiki/Interslaavi'; 
	nm13fi = '<img src="images/flag_fi.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslaavi';

	lk13fr = 'https://fr.wikipedia.org/wiki/Interslave'; 
	nm13fr = '<img src="images/flag_fr.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslave';

	lk13frr = 'https://frr.wikipedia.org/wiki/Interslaawisk_spriak'; 
	nm13frr = '<img src="images/flag_frr.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslaawisk spriak';

	lk13fy = 'https://fy.wikipedia.org/wiki/Ynterslavysk'; 
	nm13fy = '<img src="images/flag_fy.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Ynterslavysk';

	lk13ga = 'https://ga.wikipedia.org/wiki/An_Idirshlaivis'; 
	nm13ga = '<img src="images/flag_ie.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> An Idirshlaivis';

	lk13gl = 'https://gl.wikipedia.org/wiki/Lingua_intereslava'; 
	nm13gl = '<img src="images/flag_gl.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Lingua intereslava';

	lk13he = 'https://he.wikipedia.org/wiki/%D7%94%D7%A9%D7%A4%D7%94_%D7%94%D7%91%D7%99%D7%9F-%D7%A1%D7%9C%D7%90%D7%91%D7%99%D7%AA'; 
	nm13he = '<img src="images/flag_il.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> השפה הבין-סלאבית';

	lk13hi = 'https://hi.wikipedia.org/wiki/%E0%A4%85%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A4%B8%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%B5_%E0%A4%AD%E0%A4%BE%E0%A4%B7%E0%A4%BE'; 
	nm13hi = '<img src="images/flag_in.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> अंतरस्लाव भाषा';

	lk13hsb = 'https://hsb.wikipedia.org/wiki/Mjezys%C5%82owjan%C5%A1%C4%87ina'; 
	nm13hsb = '<img src="images/flag_hsb.gif" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Mjezysłowjanšćina';

	lk13hr = 'https://hr.wikipedia.org/wiki/Me%C4%91uslavenski_jezik'; 
	nm13hr = '<img src="images/flag_hr.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Međuslavenski jezik';

	lk13ia1 = 'https://ia.wikipedia.org/wiki/Interslavo'; 
	nm13ia1 = '<img src="images/flag_ia.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Lingua interslave';

	lk13ia2 = 'https://ia.wikipedia.org/wiki/Lingua_neoslavonic'; 
	nm13ia2 = '<img src="images/flag_ia.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Lingua neoslavonic';

	lk13ile = 'https://ie.wikipedia.org/wiki/Interslavic'; 
	nm13ile = '<img src="images/flag_ile.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavic';

	lk13io = 'https://io.wikipedia.org/wiki/Inter-Slava_linguo'; 
	nm13io = '<img src="images/flag_io.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Inter-Slava linguo';

	lk13it = 'https://it.wikipedia.org/wiki/Interslavo'; 
	nm13it = '<img src="images/flag_it.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavo';

	lk13ja = 'https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%B9%E3%83%A9%E3%83%BC%E3%83%B4%E3%82%A3%E3%82%AF'; 
	nm13ja = '<img src="images/flag_jp.jpg" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> インタースラーヴィク';

	lk13ka = 'https://ka.wikipedia.org/wiki/%E1%83%A1%E1%83%9A%E1%83%90%E1%83%95%E1%83%97%E1%83%90%E1%83%A8%E1%83%9D%E1%83%A0%E1%83%98%E1%83%A1%E1%83%98_%E1%83%94%E1%83%9C%E1%83%90';
	nm13ka = '<img src="images/flag_ge.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> <span style="font-family:Calibri">სლავთაშორისი ენა</span>';

	lk13csb = 'https://csb.wikipedia.org/wiki/Midz%C3%ABs%C5%82owia%C5%84sczi_j%C3%A3z%C3%ABk'; 
	nm13csb = '<img src="images/flag_csb.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Midzësłowiańsczi jãzëk';

	lk13kk = 'https://kk.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D0%B0%D1%80%D0%B0%D0%BB%D1%8B%D2%9B_%D1%82%D1%96%D0%BB%D1%96'; 
	nm13kk = '<img src="images/flag_kk.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Славянаралық тілі';

	lk13ko = 'https://ko.wikipedia.org/wiki/인터슬라빅'; 
	nm13ko = '<img src="images/flag_ko.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> 인터슬라빅';

	lk13kv = 'https://kv.wikipedia.org/wiki/Славянкостса_кыв'; 
	nm13kv = '<img src="images/flag_kv.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Славянкостса кыв';

	lk13la = 'https://la.wikipedia.org/wiki/Lingua_Interslavica'; 
	nm13la = '<img src="images/flag_vat2.jpg" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Lingua Interslavica';

	lk13ltg = 'https://ltg.wikipedia.org/wiki/Storpslavu_volūda'; 
	nm13ltg = '<img src="images/flag_ltg.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Storpslavu volūda';

	lk13lv = 'https://lv.wikipedia.org/wiki/Starpslāvu_valoda'; 
	nm13lv = '<img src="images/flag_lv.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Starpslāvu valoda';

	lk13lu = 'https://lb.wikipedia.org/wiki/Interslawesch'; 
	nm13lu = '<img src="images/flag_lu.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslawesch';

	lk13lt = 'https://lt.wikipedia.org/wiki/Tarpslavų_kalba'; 
	nm13lt = '<img src="images/flag_lt.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Tarpslavų kalba';

	lk13li = 'https://li.wikipedia.org/wiki/Interslavisch'; 
	nm13li = '<img src="images/flag_li.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavisch';

	lk13lfn1 = 'https://lfn.wikipedia.org/wiki/Medjusloviansce'; 
	nm13lfn1 = '<img src="images/flag_lfn.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Medjusloviansce';

	lk13lfn2 = 'https://lfn.wikipedia.org/wiki/Slovianto'; 
	nm13lfn2 = '<img src="images/flag_lfn.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Slovianto';

	lk13hu = 'https://hu.wikipedia.org/wiki/Interszl%C3%A1v_nyelv'; 
	nm13hu = '<img src="images/flag_hu.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interszláv nyelv';

	lk13mc = 'https://lij.wikipedia.org/wiki/Ünterslavu'; 
	nm13mc = '<img src="images/flag_id.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Ünterslavu';

	lk13mk = 'https://mk.wikipedia.org/wiki/%D0%9C%D0%B5%D1%93%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B8_%D1%98%D0%B0%D0%B7%D0%B8%D0%BA'; 
	nm13mk = '<img src="images/flag_mk.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Меѓусловенски јазик';

	lk13mn = 'https://mn.wikipedia.org/wiki/Славян_хоорондын_хэл'; 
	nm13mn = '<img src="images/flag_mo.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Славян хоорондын хэл';

	lk13mr = 'https://mr.wikipedia.org/wiki/%E0%A4%86%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A4%B8%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%B9%E0%A4%BF%E0%A4%95_%E0%A4%AD%E0%A4%BE%E0%A4%B7%E0%A4%BE'; 
	nm13mr = '<img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Marathi_Flag.svg" height="14pt" style="border:0px solid black; margin:1px 5px 0 0;"> आंतरस्लाव्हिक भाषा';

	lk13isv = 'https://isv.miraheze.org/wiki/Med%C5%BEuslovjansky_jezyk'; 
	nm13isv = '<img src="images/slov-icon3.jpg" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Medžuslovjansky jezyk';

	lk13nl = 'https://nl.wikipedia.org/wiki/Interslavisch'; 
	nm13nl = '<img src="images/flag_nl.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavisch';

	lk13no = 'https://no.wikipedia.org/wiki/Interslavisk'; 
	nm13no = '<img src="images/flag_no.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavisk';

	lk13nov = 'https://nov.wikipedia.org/wiki/Interslavum';
	nm13nov = '<img src="images/flag_nov.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavum';

	lk13oc = 'https://oc.wikipedia.org/wiki/Intereslau'; 
	nm13oc = '<img src="images/flag_oc.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Intereslau';

	lk13os = 'https://os.wikipedia.org/wiki/Æхсæнславяйнаг_æвзаг'; 
	nm13os = '<img src="images/flag_os.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Æхсæнславяйнаг æвзаг';

	lk13nds = 'https://nds.wikipedia.org/wiki/Interslaawsche_Spraak'; 
	nm13nds = '<img src="images/flag_nds.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslaawsche Spraak';

	lk13pl = 'https://pl.wikipedia.org/wiki/J%C4%99zyk_mi%C4%99dzys%C5%82owia%C5%84ski'; 
	nm13pl = '<img src="images/flag_pl.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Język międzysłowiański';

	lk13pt = 'https://pt.wikipedia.org/wiki/Língua_intereslava'; 
	nm13pt = '<img src="images/flag_pt.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Língua intereslava';

	lk13rm = 'https://rm.wikipedia.org/wiki/Lingua_interslava'; 
	nm13rm = '<img src="images/flag_ch.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Lingua interslava';

	lk13ro = 'https://ro.wikipedia.org/wiki/Limba_interslavă'; 
	nm13ro = '<img src="images/flag_ro.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Limba interslavă';

	lk13rue = 'https://rue.wikipedia.org/wiki/%D0%9C%D1%96%D0%B4%D0%B6%D1%96%D1%81%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D1%8C%D1%81%D0%BA%D1%8B%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA'; 
	nm13rue = '<img src="images/flag_rue.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Міджіславяньскый язык';

	lk13ru = 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA'; 
	nm13ru = '<img src="images/flag_ru.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;">  Межславянский язык';

	lk13sco = 'https://sco.wikipedia.org/wiki/Interslavic_leid'; 
	nm13sco = '<img src="images/flag_sco.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslavic leid';

	lk13sq = 'https://sq.wikipedia.org/wiki/Gjuha_nd%C3%ABrsllave'; 
	nm13sq = '<img src="images/flag_sq.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Gjuha ndërsllave';

	lk13sk = 'https://sk.wikipedia.org/wiki/Medzislovan%C4%8Dina'; 
	nm13sk = '<img src="images/flag_sk.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Medslovanščina';

	lk13sl = 'https://sl.wikipedia.org/wiki/Medslovan%C5%A1%C4%8Dina'; 
	nm13sl = '<img src="images/flag_slo.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Medzislovančina';

	lk13cu = 'https://cu.wikipedia.org/wiki/%D0%9C%D1%94%D0%B6%D0%B4%D0%BE%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D1%A3%D0%BD%D1%8C%D1%81%D0%BA%D1%8A_%D1%A9%EA%99%81%EA%99%91%D0%BA%D1%8A'; 
	nm13cu = '<img src="images/flag_cu.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Мєждоусловѣньскъ ѩзъıкъ';

	lk13szl = 'http://szl.wikipedia.org/wiki/Mjyndzys%C5%82owja%C5%84sko_godka'; 
	nm13szl = '<img src="images/flag_szl.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Mjyndzysłowjańsko godka';

	lk13sr = 'https://sr.wikipedia.org/wiki/%D0%9C%D0%B5%D1%92%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B8_%D1%98%D0%B5%D0%B7%D0%B8%D0%BA'; 
	nm13sr = '<img src="images/flag_sr.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Међусловенски језик';

	lk13sh = 'https://sh.wikipedia.org/wiki/Me%C4%91uslovenski_jezik'; 
	nm13sh = '<img src="images/flag_pan.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Međuslovenski jezik';

	lk13sv = 'https://sv.wikipedia.org/wiki/Interslaviska'; 
	nm13sv = '<img src="images/flag_sv.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Interslaviska';

	lk13tr = 'https://tr.wikipedia.org/wiki/İnterslavca'; 
	nm13tr = '<img src="images/flag_tr.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> İnterslavca';

	lk13udm = 'https://udm.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D0%BA%D1%83%D1%81%D0%BF%D0%BE_%D0%BA%D1%8B%D0%BB'; 
	nm13udm = '<img src="images/flag_udm.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Славянкуспо кыл';

	lk13uk = 'https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D0%B6%D1%81%D0%BB%D0%BE%D0%B2%27%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0'; 
	nm13uk = '<img src="images/flag_ua.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Міжслов’янська мова';

	lk13uy = 'https://ug.wikipedia.org/wiki/%D8%B3%D9%89%D9%84%D8%A7%DB%8B%D9%89%D9%8A%D8%A7%D9%86%D9%84%D8%A7%D8%B1_%D8%A6%D8%A7%D8%B1%D8%A7_%D8%AA%D9%89%D9%84%D9%89'; 
	nm13uy = '<img src="images/flag_uy.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> سىلاۋىيانلار ئارا تىلى';

	lk13uz = 'https://uz.wikipedia.org/wiki/Slavyanlararo_tili'; 
	nm13uz = '<img src="images/flag_uz.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Slavyanlararo tili';

	lk13vi = 'https://vi.wikipedia.org/wiki/Ti%E1%BA%BFng_Li%C3%AAn_Slav'; 
	nm13vi = '<img src="images/flag_vi.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Tiếng Liên Slav';

	lk13vo = 'https://vo.wikipedia.org/wiki/Bevüslav'; 
	nm13vo = '<img src="images/flag_vo.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Bevüslav';

	lk13wa = 'https://wa.wikipedia.org/wiki/Eter-eslåve'; 
	nm13wa = '<img src="images/flag_wa.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> Eter-eslåve';

	lk13wuu = 'https://wuu.wikipedia.org/wiki/斯拉夫共通语'; 
	nm13wuu = '<img src="images/flag_wuu.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> 斯拉夫共通语';

	lk13yi = 'https://yi.wikipedia.org/wiki/אינטערסלאוויש'; 
	nm13yi = '<img src="images/flag_yi.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> אינטערסלאוויש';

	lk13zh = 'https://zh.wikipedia.org/wiki/%E6%96%AF%E6%8B%89%E5%A4%AB%E5%85%B1%E9%80%9A%E8%AA%9E'; 
	nm13zh = '<img src="images/flag_cn.png" height="14pt" style="border:1px solid black; margin:1px 5px 0 0;"> 斯拉夫共通語';

lk14 = 'publications.html'; al14 = 'Publikacije o medžuslovjanskom | Публикације о меджусловјанском'; nm14 = 'Press and publications';

lk19 = 'links.html'; al19 = 'Vněšnje linky | Внешнье линкы'; nm19 = 'External links'; cd19 = "'links'";
	lk19a = lk19 + '#other_sites'; nm19a = 'Other sites in/about Interslavic';
	lk19b = lk19 + '#community'; nm19b = 'The Interslavic community';
	lk19c = lk19 + '#related'; nm19c = 'Related projects';
	lk19d = lk19 + '#dead_and_obsolete'; nm19d = 'Dead links and obsolete pages';
	lk19d = lk19 + '#wikis'; nm19d = 'Wikis';
	lk19e = lk19 + '#historic'; nm19e = 'Historic pages';
	lk19f = lk19 + '#discussions'; nm19f = 'Discussions about Interslavic';

/* lk18 = 'downloads.html'; al18 = 'Do pobranja | До побранја'; 	nm18 = 'Downloads'; */

lk20 = '../index.html'; al20 = 'IZHOD do domašnjej stranice | ИЗХОД до домашньеј странице'; nm20 = 'EXIT to home page';

lk21 = '<p style="text-align:center;"><a href="http://www.facebook.com/groups/interslavic"><img src="./images/banner_facebook.png" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http://slovjani.info/"><img src="./images/banner_slovjani.gif" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="https://interslavic.news/"><img src="./images/banner_interslavic-news.png" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http://isv.miraheze.org"><img src="./images/banner_medzuviki.png" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="https://isv.miraheze.org/wiki/Sbornik:Glavna_stranica"><img src="./images/banner_vikisbornik.png" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="https://twitter.com/MSVesti"><img src="./images/banner_twitter.jpg" width="170px" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http://www.neoslavonic.org"><img src="./images/banner_ns.gif" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="../slovianski/index.html"><img src="./images/banner_slovianski-170x60.png" style="border:1px solid gold;" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http_404.html"><img src="./images/banner_interslavic-lexicon-170x60.png" border="0" /></a>'; /* http://dict.interslavic.com" */
lk21 = lk21 + '<p style="text-align:center;"><a href="http://cisla.slavic-union.org/"><img src="./images/banner_cisla2018.gif" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http://fsk.si"><img src="./images/banner_fsk.gif" style="border:1px solid white;" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http://slavic-union.org/"><img src="./images/banner_slavic-union.gif" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="http://slovane.org/"><img src="./images/banner_su.gif" border="0" /></a></p>';
lk21 = lk21 + '<p style="text-align:center;"><a href="../index.html"><img src="../files/mm_banner.gif" border="0" width="169px" style="border:1px solid gold;" /></a>';

lk22 = '<p style="text-align:center;"><a href="http://s02.flagcounter.com/more/4WL">';
lk22 =  lk22 + '<img src="http://s02.flagcounter.com/count/4WL/bg=113399/txt=fada03/border=113399/columns=2/';
lk22 =  lk22 + 'maxflags=16/viewers=Gosti+od+2008+goda/labels=1/pageviews=1" alt="free counters" border="0"';
lk22 =  lk22 + 'width="170px"></a><br><a href="http://s06.flagcounter.com/more/U44e">';
lk22 =  lk22 + '<img src="http://s06.flagcounter.com/count/U44e/bg=113399/txt=fada03/border=000000/columns=3/';
lk22 =  lk22 + 'maxflags=1/viewers=3/labels=1/" alt="" border="0" width="3px" height="3px"></a></p>';
lk22 = lk22 + '<p style="text-align:center;"><a href="http://interslavic-language.org"><img src="./images/is-portal2.png" border="0" /></a></p>';

/*
lk23 = '<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fsteen.free.fr%2Fslovianski%';
lk23 = lk23 + '2F&amp;layout=button_count&amp;show_faces=false&amp;width=130&amp;action=like&amp;font=arial&amp;colorscheme=light&amp;height=35"';
lk23 = lk23 + 'scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:130px; height:20px;" allowTransparency="true"></iframe>';
*/

lk24 = '<p style="text-align:center;"><form title="Daruj | Даруј" action="https://www.paypal.com/cgi-bin/webscr" method="post">';
lk24 += '<input type="hidden" name="cmd" value="_s-xclick">';
lk24 += '<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHNwYJKoZIhvcNAQcEoIIHKDCCByQCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCLfQylT7er8fq+A79BC8nSgFnE7t1kdY4KLozUkwaPB1NCamdPAofLKxkbjjOeoyNu+2cFMja+nbI2QIgpYnvt9G/mZOtNESc+88JLlWDNE6fowpHGCiNc3pZIPxJyEXadQxqJr4BBEMHH1fY7IrBA728NGujwROiz3vLhmItuRjELMAkGBSsOAwIaBQAwgbQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIfLlmZwfdWgKAgZDjxibL1Ye30psN2+WJkVQw4FWuA3dRosO0rMEglHAwHmzkl9oVHzn1flItskv9Q0Xb6Xoh2k9zM304GJV0D9YVqbLsr5iSWaekokv2KA5I/Nh4/JIxodgmxdxbab73XzEZp0sDQJzs1AcxFdCBIepvfzKwG2nUZPuYjKXZii+e/gsMVSulUf39d5YUs85FBimgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xMDEyMDMwMjM3MjZaMCMGCSqGSIb3DQEJBDEWBBRR8+kw9E6CGRwF2fO3TEnaID/gvjANBgkqhkiG9w0BAQEFAASBgGZaEuiCHtm9d8yu9uluf8smXp+/PRXNuUYLZ0yzDjgpvoupZuQjcHG5PZ6rp7zdGttvmckToH7AaD1AmntPVlgOo0FCv0+egvIu7U82eK8FMMGrzyHsCgQMTzhfZ4MxDaSmyUdV2MTFL+gVnTcClYksJAnvUptS3cZs8nb38Je+-----END PKCS7-----'
lk24 += '">';
lk24 += '<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">';
/* lk24 += '<img alt="" border="0" src="https://www.paypal.com/nl_NL/i/scr/pixel.gif" width="1" height="1">' */
lk24 += '</form></p>';




  document.write('<div id="menu">');
  document.write('<table class="knop" cellspacing="0">');

  document.write(bgu + cd1 + mout + cd1 + arf + lk1 + tit + al1 + div + nm1 + slu + ukop1 + 'main' + ukop2);
  document.write(	bgz + lk1a + div + nm1a + slu);
  document.write(	bgz + lk1b + div + nm1b + slu);
  document.write(uvoet);

  document.write(bgu + cd2 + mout + cd2 + ');"><a title="' + al2 + div + nm2 + slu + ukop1 + 'intro' + ukop2);
  document.write(	bgu + cd2a + mout + cd2a + arf + lk2a + div + nm2a + slu + ukop1 + cd2a + ukop2);
  document.write(		bgz + lk2aa + div + nm2aa + slu);
  document.write(		bgz + lk2ab + div + nm2ab + slu);
  document.write(		bgz + lk2ac + div + nm2ac + slu);
  document.write(		bgz + lk2ad + div + nm2ad + slu);
  document.write(		bgz + lk2ae + div + nm2ae + slu);
  document.write(		bgz + lk2af + div + nm2af + slu);
  document.write(		bgz + lk2ag + div + nm2ag + slu);
  document.write(		bgz + lk2ah + div + nm2ah + slu + uvoet);
  document.write(	bgz + lk2c + div + nm2c + slu);
  document.write(	bgu + cd2b + mout + cd2b + arf + lk2b + div + nm2b + slu + ukop1 + cd2b + ukop2);
  document.write(		bgz + lk2ba + div + nm2ba + slu);
  document.write(		bgu + cd2bb + mout + cd2bb + arf + lk2bb + div + nm2bb + slu + ukop1 + cd2bb + ukop2);
  document.write(			bgz + lk2bb1 + div + nm2bb1 + slu);
  document.write(			bgz + lk2bb2 + div + nm2bb2 + slu);
  document.write(			bgz + lk2bb3 + div + nm2bb3 + slu);
  document.write(			bgz + lk2bb4 + div + nm2bb4 + slu);
  document.write(			bgz + lk2bb5 + div + nm2bb5 + slu + uvoet);
  document.write(		bgu + cd2bc + mout + cd2bc + arf + lk2bc + div + nm2bc + slu + ukop1 + cd2bc + ukop2);
  document.write(			bgz + lk2bc1 + div + nm2bc1 + slu);
  document.write(			bgz + lk2bc2 + div + nm2bc2 + slu + uvoet + uvoet);
  document.write(	bgu + cd2d + mout + cd2d + arf + lk2d + div + nm2d + slu + ukop1 + cd2d + ukop2);
  document.write(		bgz + lk2da + div + nm2da + slu);
  document.write(		bgz + lk2db + div + nm2db + slu);
  document.write(		bgz + lk2dc + div + nm2dc + slu);
  document.write(		bgz + lk2dd + div + nm2dd + slu + uvoet);
  document.write(	bgu + cd2e + mout + cd2e + arf + lk2e + div + nm2e + slu + ukop1 + cd2e + ukop2);
  document.write(		bgz + lk2ea + div + nm2ea + slu);
  document.write(		bgz + lk2eb + div + nm2eb + slu);
  document.write(		bgz + lk2ec + div + nm2ec + slu);
  document.write(		bgz + lk2ed + div + nm2ed + slu);
  document.write(		bgz + lk2ee + div + nm2ee + slu);
  document.write(		bgz + lk2ef + div + nm2ef + slu);
  document.write(		bgz + lk2eg + div + nm2eg + slu);
  document.write(		bgz + lk2eh + div + nm2eh + slu);
  document.write(		bgu + cd2ei + mout + cd2ei + arf + lk2ei + div + nm2ei + slu + ukop1 + cd2ei + ukop2);
  document.write(			bgz + lk2ei1 + div + nm2ei1 + slu);
  document.write(			bgz + lk2ei2 + div + nm2ei2 + slu);
  document.write(			bgz + lk2ei3 + div + nm2ei3 + slu);
  document.write(			bgz + lk2ei4 + div + nm2ei4 + slu);
  document.write(			bgz + lk2ei5 + div + nm2ei5 + slu + uvoet + uvoet);
  document.write(uvoet);

  document.write(bgu + cd3 + mout + cd3 + arf + lk3 + tit + al3 + div + nm3 + slu + ukop1 + 'ortho' + ukop2);
  document.write(	bgz + lk3a + div + nm3a + slu);
  document.write(	bgz + lk3b + div + nm3b + slu);
  document.write(	bgz + lk3c + div + nm3c + slu);
  document.write(	bgz + lk3d + div + nm3d + slu);
  document.write(	bgz + lk3e + div + nm3e + slu);
  document.write(uvoet);

  document.write(bgu + cd4 + mout + cd4 + arf + lk4 + tit + al4 + div + nm4 + slu + ukop1 + 'phono' + ukop2);
  document.write(	bgu + cd4a + mout + cd4a + arf + lk4a + div + nm4a + slu + ukop1 + 'phono1' + ukop2);
  document.write(		bgz + lk4a1 + div + nm4a1 + slu);
  document.write(		bgz + lk4a2 + div + nm4a2 + slu + uvoet);
  document.write(	bgz + lk4b + div + nm4b + slu);
  document.write(	bgz + lk4c + div + nm4c + slu);
  document.write(	bgu + cd4d + mout + cd4d + arf + lk4d + div + nm4d + slu + ukop1 + 'phono2' + ukop2);
  document.write(		bgz + lk4d1 + div + nm4d1 + slu);
  document.write(		bgz + lk4d2 + div + nm4d2 + slu);
  document.write(		bgz + lk4d3 + div + nm4d3 + slu);
  document.write(		bgz + lk4d4 + div + nm4d4 + slu);
  document.write(		bgz + lk4d5 + div + nm4d5 + slu);
  document.write(		bgz + lk4d6 + div + nm4d6 + slu + uvoet);
  document.write(uvoet);

  document.write(bgu + cd5 + mout + cd5 + arf + lk5 + tit + al5 + div + nm5 + slu + ukop1 + 'pron' + ukop2);
  document.write(	bgz + lk5a + div + nm5a + slu);
  document.write(	bgz + lk5b + div + nm5b + slu);
  document.write(	bgz + lk5c + div + nm5c + slu);
  document.write(	bgz + lk5d + div + nm5d + slu);
  document.write(uvoet);

  document.write(bgu + cd6 + mout + cd6 + arf + lk6 + tit + al6 + div + nm6 + slu + ukop1 + 'gram' + ukop2);
  document.write(	bgu + cd6a + mout + cd6a + arf + lk6a + div + nm6a + slu + ukop1 + 'santo' + ukop2);
  document.write(		bgz + lk6aa + div + nm6aa + slu);
  document.write(		bgz + lk6ab + div + nm6ab + slu);
  document.write(		bgz + lk6ac + div + nm6ac + slu + uvoet);
  document.write(	bgu + cd6b + mout + cd6b + arf + lk6b + div + nm6b + slu + ukop1 + 'grammar' + ukop2);
  document.write(		bgu + cd6ba + mout + cd6ba + arf + lk6ba + div + nm6ba + slu + ukop1 + 'grammar1' + ukop2);
  document.write(			bgz + lk6ba1 + div + nm6ba1 + slu);
  document.write(			bgz + lk6ba2 + div + nm6ba2 + slu);
  document.write(			bgz + lk6ba3 + div + nm6ba3 + slu);
  document.write(			bgz + lk6ba4 + div + nm6ba4 + slu);
  document.write(			bgz + lk6ba5 + div + nm6ba5 + slu);
  document.write(			bgz + lk6ba6 + div + nm6ba6 + slu + uvoet);
  document.write(		bgu + cd6bb + mout + cd6bb + arf + lk6bb + div + nm6bb + slu + ukop1 + 'grammar2' + ukop2);
  document.write(			bgz + lk6bb1 + div + nm6bb1 + slu);
  document.write(			bgz + lk6bb2 + div + nm6bb2 + slu);
  document.write(			bgz + lk6bb3 + div + nm6bb3 + slu);
  document.write(			bgz + lk6bb4 + div + nm6bb4 + slu + uvoet);
  document.write(		bgu + cd6bc + mout + cd6bc + arf + lk6bc + div + nm6bc + slu + ukop1 + 'grammar3' + ukop2);
  document.write(			bgz + lk6bc1 + div + nm6bc1 + slu);
  document.write(			bgz + lk6bc2 + div + nm6bc2 + slu);
  document.write(			bgz + lk6bc3 + div + nm6bc3 + slu);
  document.write(			bgz + lk6bc4 + div + nm6bc4 + slu);
  document.write(			bgz + lk6bc5 + div + nm6bc5 + slu);
  document.write(			bgz + lk6bc6 + div + nm6bc6 + slu);
  document.write(			bgz + lk6bc7 + div + nm6bc7 + slu);
  document.write(			bgz + lk6bc8 + div + nm6bc8 + slu + uvoet);
  document.write(		bgu + cd6bd + mout + cd6bd + arf + lk6bd + div + nm6bd + slu + ukop1 + 'grammar4' + ukop2);
  document.write(			bgz + lk6bd1 + div + nm6bd1 + slu);
  document.write(			bgz + lk6bd2 + div + nm6bd2 + slu);
  document.write(			bgz + lk6bd3 + div + nm6bd3 + slu);
  document.write(			bgz + lk6bd4 + div + nm6bd4 + slu);
  document.write(			bgz + lk6bd5 + div + nm6bd5 + slu);
  document.write(			bgz + lk6bd6 + div + nm6bd6 + slu);
  document.write(			bgz + lk6bd7 + div + nm6bd7 + slu);
  document.write(			bgz + lk6bd8 + div + nm6bd8 + slu + uvoet);
  document.write(		bgu + cd6be + mout + cd6be + arf + lk6be + div + nm6be + slu + ukop1 + 'grammar5' + ukop2);
  document.write(			bgz + lk6be1 + div + nm6be1 + slu);
  document.write(			bgz + lk6be2 + div + nm6be2 + slu);
  document.write(			bgz + lk6be3 + div + nm6be3 + slu);
  document.write(			bgz + lk6be5 + div + nm6be5 + slu);
  document.write(			bgz + lk6be6 + div + nm6be6 + slu);
  document.write(			bgz + lk6be7 + div + nm6be7 + slu);
  document.write(			bgz + lk6be8 + div + nm6be8 + slu);
  document.write(			bgz + lk6be9 + div + nm6be9 + slu);
  document.write(			bgz + lk6be10 + div + nm6be10 + slu);
  document.write(			bgz + lk6be11 + div + nm6be11 + slu);
  document.write(			bgu + cd6be12 + mout + cd6be12 + arf + lk6be12 + div + nm6be12 + slu + ukop1 + 'grammar5a' + ukop2);
  document.write(				bgz + lk6be12a + div + nm6be12a + slu);
  document.write(				bgz + lk6be12b + div + nm6be12b + slu);
  document.write(				bgz + lk6be12c + div + nm6be12c + slu + uvoet + uvoet);
  document.write(		bgz + lk6bf + div + nm6bf + slu);
  document.write(		bgz + lk6bg + div + nm6bg + slu);
  document.write(		bgz + lk6bh + div + nm6bh + slu + uvoet);
  document.write(uvoet);

  document.write(bgu + cd7 + mout + cd7 + ');"><a title="' + al7 + div + nm7 + slu + ukop1 + 'vocab' + ukop2);
  document.write(	bgu + cd7a + mout + cd7a + arf + lk7a + div + nm7a + slu + ukop1 + 'forma' + ukop2);
  document.write(		bgz + lk7a1 + div + nm7a1 + slu);
  document.write(		bgz + lk7a2 + div + nm7a2 + slu);
  document.write(		bgz + lk7a3 + div + nm7a3 + slu + uvoet);
  document.write(	bgu + cd7b + mout + cd7b + arf + lk7b + div + nm7b + slu + ukop1 + 'deriv' + ukop2);
  document.write(		bgz + lk7b1 + div + nm7b1 + slu);
  document.write(		bgz + lk7b2 + div + nm7b2 + slu + uvoet);
  document.write(	bgu + cd7c + mout + cd7c + arf + lk7c + div + nm7c + slu + ukop1 + 'flav' + ukop2);
  document.write(		bgz + lk7c1 + div + nm7c1 + slu);
  document.write(		bgz + lk7c2 + div + nm7c2 + slu);
  document.write(		bgz + lk7c3 + div + nm7c3 + slu);
  document.write(		bgz + lk7c4 + div + nm7c4 + slu + uvoet);
  document.write(uvoet);

  document.write(bgu + cd8 + mout + cd8 + ');"><a title="' + al8 + div + nm8 + slu + ukop1 + 'dicts' + ukop2);
  document.write(	bgz + lk8a + div + nm8a + slu);
  document.write(	bgz + lk8b + div + nm8b + slu);
  document.write(	bgz + lk8c + div + nm8c + slu);
  document.write(	bgz + lk8d + div + nm8d + slu);
  document.write(	bgz + lk8e + div + nm8e + slu);
  document.write(	bgz + lk8f + div + nm8f + slu);
  document.write(	bgz + lk8g + div + nm8g + slu);
  document.write(	bgz + lk8h + div + nm8h + slu);
  document.write(	bgz + lk8i + div + nm8i + slu);
  document.write(uvoet);

  document.write(bgu + cd9 + mout + cd9 + ');"><a title="' + al9 + div + nm9 + slu + ukop1 + 'mater' + ukop2);
  document.write(	bgu + cd9a + mout + cd9a + arf + lk9a + div + nm9a + slu + ukop1 + 'texts' + ukop2);
  document.write(		bgz + lk9aa + div + nm9aa + slu);
  document.write(		bgz + lk9ab + div + nm9ab + slu);
  document.write(		bgz + lk9ac + div + nm9ac + slu);
  document.write(		bgz + lk9ad + div + nm9ad + slu);
  document.write(		bgz + lk9ae + div + nm9ae + slu);
  document.write(		bgz + lk9af + div + nm9af + slu);
  document.write(		bgz + lk9ag + div + nm9ag + slu);
  document.write(		bgz + lk9ah + div + nm9ah + slu);
  document.write(		bgz + lk9ai + div + nm9ai + slu);
  document.write(		bgz + lk9aj + div + nm9aj + slu);
  document.write(		bgz + lk9ak + div + nm9ak + slu);
  document.write(		bgz + lk9al + div + nm9al + slu + uvoet);
  document.write(	bgu + cd9b + mout + cd9b + ');"><a><div>' + nm9b + slu + ukop1 + 'books' + ukop2);
  document.write(		bgz + lk9ba + div + nm9ba + slu);
  document.write(		bgz + lk9bb + div + nm9bb + slu);
  document.write(		bgz + lk9bc + div + nm9bc + slu + uvoet);
  document.write(	bgz + lk9f + div + nm9f + slu);
  document.write(	bgz + lk9c + div + nm9c + slu);
  document.write(	bgz + lk9d + div + nm9d + slu);
  document.write(	bgu + cd9e + mout + cd9e + arf + lk9e + div + nm9e + slu + ukop1 + 'youtube' + ukop2);
  document.write(		bgz + lk9ea + div + nm9ea + slu);
  document.write(		bgz + lk9eb + div + nm9eb + slu);
  document.write(		bgz + lk9ec + div + nm9ec + slu);
  document.write(		bgz + lk9ed + div + nm9ed + slu);
  document.write(		bgz + lk9ee + div + nm9ee + slu);
  document.write(		bgz + lk9ef + div + nm9ef + slu);
  document.write(		bgz + lk9eg + div + nm9eg + slu);
  document.write(		bgz + lk9eh + div + nm9eh + slu + uvoet);
  document.write(uvoet);

  document.write(bgu + cd10 + mout + cd10 + arf + lk10 + tit + al10 + div + nm10 + slu + ukop1 + 'film' + ukop2);
  document.write(	bgz + lk10a + div + nm10a + slu);
  document.write(	bgz + lk10b + div + nm10b + slu);
  document.write(	bgz + lk10c + div + nm10c + slu);
  document.write(	bgz + lk10d + div + nm10d + slu);
  document.write(	bgz + lk10e + div + nm10e + slu);
  document.write(	bgz + lk10f + div + nm10f + slu);
  document.write(	bgz + lk10g + div + nm10g + slu);
  document.write(	bgz + lk10h + div + nm10h + slu);
  document.write(uvoet);


  document.write(bgu + cd11 + mout + cd11 + ');"><a title="' + al11 + div + nm11 + slu + ukop1 + 'tools' + ukop2);
  document.write(	bgz + lk11a + div + nm11a + slu);
  document.write(	bgz + lk11b + div + nm11b + slu);
  document.write(	bgz + lk11c + div + nm11c + slu);
  document.write(	bgz + lk11d + div + nm11d + slu);
  document.write(	bgz + lk11e + div + nm11e + slu);
  document.write(	bgz + lk11f + div + nm11f + slu);
  document.write(	bgz + lk11g + div + nm11g + slu);
  document.write(	bgz + lk11h + div + nm11h + slu);
  document.write(	bgz + lk11i + div + nm11i + slu);
  document.write(	bgz + lk11j + div + nm11j + slu);
  document.write(uvoet);

  document.write(bgu + cd12 + mout + cd12 + ');"><a title="' + al12 + div + nm12 + slu + ukop1 + 'comm' + ukop2);
  document.write(	bgu + cd12a + mout + cd12a + arf + lk12a + div + nm12a + slu + ukop1 + 'cisla' + ukop2);
  document.write(		bgz + lk12aa + div + nm12aa + slu);
  document.write(		bgz + lk12ab + div + nm12ab + slu);
  document.write(		bgz + lk12ac + div + nm12ac + slu + uvoet);
  document.write(	bgz + lk12b + div + nm12b + slu);
  document.write(	bgz + lk12c + div + nm12c + slu);
  document.write(	bgz + lk12d + div + nm12d + slu);
  document.write(	bgz + lk12e + div + nm12e + slu);
  document.write(	bgz + lk12f + div + nm12f + slu);
  document.write(	bgz + lk12g + div + nm12g + slu);
  document.write(	bgz + lk12h + div + nm12h + slu);
  document.write(	bgz + lk12i + div + nm12i + slu);
  document.write(	bgz + lk12j + div + nm12j + slu);
  document.write(uvoet);

  document.write(bgu + cd13 + mout + cd13 + arf + lk13 + tit + al13 + div + nm13 + slu + ukop1 + 'wiki' + ukop2);
  document.write(	bgu + cd13a + mout + cd13a + ');"><a><div>' + nm13a + slu + ukop1 + 'wiki1' + ukop2);
  document.write(		bgz + lk13by + div + nm13by + slu);
  document.write(		bgz + lk13be + div + nm13be + slu);
  document.write(		bgz + lk13bs + div + nm13bs + slu);
  document.write(		bgz + lk13bg + div + nm13bg + slu);
  document.write(		bgz + lk13cs + div + nm13cs + slu);
  document.write(		bgz + lk13dsb + div + nm13dsb + slu);
  document.write(		bgz + lk13hsb + div + nm13hsb + slu);
  document.write(		bgz + lk13hr + div + nm13hr + slu);
  document.write(		bgz + lk13csb + div + nm13csb + slu);
  document.write(		bgz + lk13mk + div + nm13mk + slu);
  document.write(		bgz + lk13isv + div + nm13isv + slu);
  document.write(		bgz + lk13pl + div + nm13pl + slu);
  document.write(		bgz + lk13rue + div + nm13rue + slu);
  document.write(		bgz + lk13ru + div + nm13ru + slu);
  document.write(		bgz + lk13sk + div + nm13sk + slu);
  document.write(		bgz + lk13sl + div + nm13sl + slu);
  document.write(		bgz + lk13cu + div + nm13cu + slu);
  document.write(		bgz + lk13szl + div + nm13szl + slu);
  document.write(		bgz + lk13sr + div + nm13sr + slu);
  document.write(		bgz + lk13sh + div + nm13sh + slu);
  document.write(		bgz + lk13uk + div + nm13uk + slu + uvoet);
  document.write(	bgu + cd13b + mout + cd13b + ');"><a><div>' + nm13b + slu + ukop1 + 'wiki2' + ukop2);
  document.write(		bgz + lk13af + div + nm13af + slu);
  document.write(		bgz + lk13als + div + nm13als + slu);
  document.write(		bgz + lk13de + div + nm13de + slu);
  document.write(		bgz + lk13en + div + nm13en + slu);
  document.write(		bgz + lk13sim + div + nm13sim + slu);
  document.write(		bgz + lk13fy + div + nm13fy + slu);
  document.write(		bgz + lk13lu + div + nm13lu + slu);
  document.write(		bgz + lk13li + div + nm13li + slu);
  document.write(		bgz + lk13nl + div + nm13nl + slu);
  document.write(		bgz + lk13no + div + nm13no + slu);
  document.write(		bgz + lk13frr + div + nm13frr + slu);
  document.write(		bgz + lk13nds + div + nm13nds + slu);
  document.write(		bgz + lk13sco + div + nm13sco + slu);
  document.write(		bgz + lk13sv + div + nm13sv + slu);
  document.write(		bgz + lk13yi + div + nm13yi + slu + uvoet);
  document.write(	bgu + cd13c + mout + cd13c + ');"><a><div>' + nm13c + slu + ukop1 + 'wiki3' + ukop2);
  document.write(		bgz + lk13an + div + nm13an + slu);
  document.write(		bgz + lk13ast + div + nm13ast + slu);
  document.write(		bgz + lk13ca + div + nm13ca + slu);
  document.write(		bgz + lk13es + div + nm13es + slu);
  document.write(		bgz + lk13fr + div + nm13fr + slu);
  document.write(		bgz + lk13gl + div + nm13gl + slu);
  document.write(		bgz + lk13it + div + nm13it + slu);
  document.write(		bgz + lk13la + div + nm13la + slu);
  document.write(		bgz + lk13mc + div + nm13mc + slu);
  document.write(		bgz + lk13oc + div + nm13oc + slu);
  document.write(		bgz + lk13pt + div + nm13pt + slu);
  document.write(		bgz + lk13ro + div + nm13ro + slu);
  document.write(		bgz + lk13rm + div + nm13rm + slu);
  document.write(		bgz + lk13wa + div + nm13wa + slu + uvoet);
  document.write(	bgu + cd13d + mout + cd13d + ');"><a><div>' + nm13d + slu + ukop1 + 'wiki4' + ukop2);
  document.write(		bgz + lk13ab + div + nm13ab + slu);
  document.write(		bgz + lk13az1 + div + nm13az1 + slu);
  document.write(		bgz + lk13az2 + div + nm13az2 + slu);
  document.write(		bgz + lk13cy + div + nm13cy + slu);
  document.write(		bgz + lk13ee + div + nm13ee + slu);
  document.write(		bgz + lk13el + div + nm13el + slu);
  document.write(		bgz + lk13fi + div + nm13fi + slu);
  document.write(		bgz + lk13ga + div + nm13ga + slu);
  document.write(		bgz + lk13ka + div + nm13ka + slu);
  document.write(		bgz + lk13kv + div + nm13kv + slu);
  document.write(		bgz + lk13ltg + div + nm13ltg + slu);
  document.write(		bgz + lk13lv + div + nm13lv + slu);
  document.write(		bgz + lk13lt + div + nm13lt + slu);
  document.write(		bgz + lk13hu + div + nm13hu + slu);
  document.write(		bgz + lk13os + div + nm13os + slu);
  document.write(		bgz + lk13sq + div + nm13sq + slu);
  document.write(		bgz + lk13tr + div + nm13tr + slu);
  document.write(		bgz + lk13udm + div + nm13udm + slu + uvoet);
  document.write(	bgu + cd13e + mout + cd13e + ');"><a><div>' + nm13e + slu + ukop1 + 'wiki5' + ukop2);
  document.write(		bgz + lk13am + div + nm13am + slu);
  document.write(		bgz + lk13ar + div + nm13ar + slu);
  document.write(		bgz + lk13id + div + nm13id + slu);
  document.write(		bgz + lk13fa + div + nm13fa + slu);
  document.write(		bgz + lk13he + div + nm13he + slu);
  document.write(		bgz + lk13hi + div + nm13hi + slu);
  document.write(		bgz + lk13ja + div + nm13ja + slu);
  document.write(		bgz + lk13kk + div + nm13kk + slu);
  document.write(		bgz + lk13ko + div + nm13ko + slu);
  document.write(		bgz + lk13mr + div + nm13mr + slu);
  document.write(		bgz + lk13mn + div + nm13mn + slu);
  document.write(		bgz + lk13uy + div + nm13uy + slu);
  document.write(		bgz + lk13uz + div + nm13uz + slu);
  document.write(		bgz + lk13vi + div + nm13vi + slu);
  document.write(		bgz + lk13wuu + div + nm13wuu + slu);
  document.write(		bgz + lk13zh + div + nm13zh + slu + uvoet);
  document.write(	bgu + cd13f + mout + cd13f + ');"><a><div>' + nm13f + slu + ukop1 + 'wiki6' + ukop2);
  document.write(		bgz + lk13eo + div + nm13eo + slu);
  document.write(		bgz + lk13ia1 + div + nm13ia1 + slu);
  document.write(		bgz + lk13ia2 + div + nm13ia2 + slu);
  document.write(		bgz + lk13ile + div + nm13ile + slu);
  document.write(		bgz + lk13io + div + nm13io + slu);
  document.write(		bgz + lk13avk + div + nm13avk + slu);
  document.write(		bgz + lk13lfn1 + div + nm13lfn1 + slu);
  document.write(		bgz + lk13lfn2 + div + nm13lfn2 + slu);
  document.write(		bgz + lk13nov + div + nm13nov + slu);
  document.write(		bgz + lk13vo + div + nm13vo + slu + uvoet);
  document.write(uvoet);

  document.write(bgz + lk14 + tit + al14 + div + nm14 + slz);

  document.write(bgu + cd19 + mout + cd19 + arf + lk19 + tit + al19 + div + nm19 + slu + ukop1 + 'links' + ukop2);
  document.write(	bgz + lk19a + div + nm19a + slu);
  document.write(	bgz + lk19b + div + nm19b + slu);
  document.write(	bgz + lk19c + div + nm19c + slu);
  document.write(	bgz + lk19d + div + nm19d + slu);
  document.write(	bgz + lk19e + div + nm19e + slu);
  document.write(	bgz + lk19f + div + nm19f + slu);
  document.write(uvoet);

/*  document.write(bgz + lk18 + tit + al13 + div + nm18 + slz); */

  document.write(bgz + lk20 + tit + al20 + div + nm20 + slz);

  document.write('<tr><td align="center">' + lk21 + '</td></tr>');

  document.write('<tr><td align="center">' + lk22 + '</td></tr>');


/*  document.write ('<tr><td align="center">' + lk23 + '</td></tr>');

  document.write('<tr><td align="center">' + lk24 + '</td></tr>'); */


  document.write('</table></div></div>');

  document.write('</td><td>');
  document.write('<div id="news">');
  document.write('<div style="position:absolute; right:0px; top: 10px;"><a href="http://interslavic-language.org"><img src="./images/is-portal.png" width="100px" border="0" /></a></div>');


}


/***** Slovianski footer *****/

function footer (lastupdate)
{
  document.write('</div>');
  date = '2006';
  var now = new Date();
  var curr_year = now.getFullYear();
  cop_not = '&copy; <a href="mailto:wenedyk@yahoo.co.uk"><em>Jan van Steenbergen</em></a>, ';

  if (date == '')		{ cop_not = ''; }
  else if (date == curr_year)	{ cop_not = cop_not + date; }
  else if (date.length > 4)	{ cop_not = cop_not + date; }
  else				{ cop_not = cop_not + date + '-' + curr_year; }  

  cop_not = cop_not + '<br>Poslědna izměna: ' + lastupdate;

  document.write('<div id="footer" style="margin-right:3em; font-size:80%;"><p style="text-align:right">' + cop_not + '</div>');
}

function klapuit (veld)
{
	document.getElementById(veld).style.display = "inline-block";
}

function klapin (veld)
{
	for (i = 0; i < 10000; i++) {}
	document.getElementById(veld).style.display = "none";
}

/***** Letters *****/

function letters (lang, letter)
{
  if (letter == "A")	{ lta = '<span class="grletter">A</span> '; }
	else		{ lta = '<a href="#A"><span class="klletter">A</span></a> '; }
  if (letter == "B")	{ ltb = '<span class="grletter">B</span> '; }
	else		{ ltb = '<a href="#B"><span class="klletter">B</span></a> '; }
  if (letter == "C")	{ ltc = '<span class="grletter">C</span> '; }
	else		{ ltc = '<a href="#C"><span class="klletter">C</span></a> '; }
  if (letter == "Ć")	{ ltcj = '<span class="grletter">Ć</span> '; letter = "CJ"; }
	else		{ ltcj = '<a href="#CJ"><span class="klletter">Ć</span></a> '; }
  if (letter == "Č")	{ ltcz = '<span class="grletter">Č</span> '; letter = "CZ"; }
	else		{ ltcz = '<a href="#CZ"><span class="klletter">Č</span></a> '; }
  if (letter == "D")	{ ltd = '<span class="grletter">D</span> '; }
	else		{ ltd = '<a href="#D"><span class="klletter">D</span></a> '; }
  if (letter == "Đ")	{ ltdzj = '<span class="grletter">Đ</span> '; letter = "DZJ"}
	else		{ ltdzj = '<a href="#DZJ"><span class="klletter">Đ</span></a> '; }
  if (letter == "E")	{ lte = '<span class="grletter">E</span> '; }
	else		{ lte = '<a href="#E"><span class="klletter">E</span></a> '; }
  if (letter == "F")	{ ltf = '<span class="grletter">F</span> '; }
	else		{ ltf = '<a href="#F"><span class="klletter">F</span></a> '; }
  if (letter == "G")	{ ltg = '<span class="grletter">G</span> '; }
	else		{ ltg = '<a href="#G"><span class="klletter">G</span></a> '; }
  if (letter == "Ģ")	{ ltgj = '<span class="grletter">Ģ</span> '; letter = "GJ"; }
	else		{ ltgj = '<a href="#GJ"><span class="klletter">Ģ</span></a> '; }
  if (letter == "H")	{ lth = '<span class="grletter">H</span> '; }
	else		{ lth = '<a href="#H"><span class="klletter">H</span></a> '; }
  if (letter == "I")	{ lti = '<span class="grletter">I</span> '; }
	else		{ lti = '<a href="#I"><span class="klletter">I</span></a> '; }
  if (letter == "J")	{ ltj = '<span class="grletter">J</span> '; }
	else		{ ltj = '<a href="#J"><span class="klletter">J</span></a> '; }
  if (letter == "K")	{ ltk = '<span class="grletter">K</span> '; }
	else		{ ltk = '<a href="#K"><span class="klletter">K</span></a> '; }
  if (letter == "Ķ")	{ ltkj = '<span class="grletter">Ķ</span> '; letter = "KJ"; }
	else		{ ltkj = '<a href="#KJ"><span class="klletter">Ķ</span></a> '; }
  if (letter == "L")	{ ltl = '<span class="grletter">L</span> '; }
	else		{ ltl = '<a href="#L"><span class="klletter">L</span></a> '; }
  if (letter == "Ľ")	{ ltlj = '<span class="grletter">Ľ</span> '; letter = "LJ"; }
	else		{ ltlj = '<a href="#LJ"><span class="klletter">Ľ</span></a> '; }
  if (letter == "Ł")	{ ltll = '<span class="grletter">Ł</span> '; letter = "LL"; }
	else		{ ltll = '<a href="#LL"><span class="klletter">Ł</span></a> '; }
  if (letter == "M")	{ ltm = '<span class="grletter">M</span> '; }
	else		{ ltm = '<a href="#M"><span class="klletter">M</span></a> '; }
  if (letter == "N")	{ ltn = '<span class="grletter">N</span> '; }
	else		{ ltn = '<a href="#N"><span class="klletter">N</span></a> '; }
  if (letter == "Ň")	{ ltnj = '<span class="grletter">Ň</span> '; letter = "NJ"; }
	else		{ ltnj = '<a href="#NJ"><span class="klletter">Ň</span></a> '; }
  if (letter == "O")	{ lto = '<span class="grletter">O</span> '; }
	else		{ lto = '<a href="#O"><span class="klletter">O</span></a> '; }
  if (letter == "Ó")	{ ltoo = '<span class="grletter">Ó</span> '; letter = "OO"; }
	else		{ ltoo = '<a href="#OO"><span class="klletter">Ó</span></a> '; }
  if (letter == "P")	{ ltp = '<span class="grletter">P</span> '; }
	else		{ ltp = '<a href="#P"><span class="klletter">P</span></a> '; }
  if (letter == "Q")	{ ltq = '<span class="grletter">Q</span> '; }
	else		{ ltq = '<a href="#Q"><span class="klletter">Q</span></a> '; }
  if (letter == "R")	{ ltr = '<span class="grletter">R</span> '; }
	else		{ ltr = '<a href="#R"><span class="klletter">R</span></a> '; }
  if (letter == "S")	{ lts = '<span class="grletter">S</span> '; }
	else		{ lts = '<a href="#S"><span class="klletter">S</span></a> '; }
  if (letter == "Ś")	{ ltsj = '<span class="grletter">Ś</span> '; letter = "SJ"; }
	else		{ ltsj = '<a href="#SJ"><span class="klletter">Ś</span></a> '; }
  if (letter == "Š")	{ ltsz = '<span class="grletter">Š</span> '; letter = "SZ"; }
	else		{ ltsz = '<a href="#SZ"><span class="klletter">Š</span></a> '; }
  if (letter == "T")	{ ltt = '<span class="grletter">T</span> '; }
	else		{ ltt = '<a href="#T"><span class="klletter">T</span></a> '; }
  if (letter == "Ť")	{ lttj = '<span class="grletter">Ť</span> '; letter = "TJ"; }
	else		{ lttj = '<a href="#TJ"><span class="klletter">Ť</span></a> '; }
  if (letter == "U")	{ ltu = '<span class="grletter">U</span> '; }
	else		{ ltu = '<a href="#U"><span class="klletter">U</span></a> '; }
  if (letter == "V")	{ ltv = '<span class="grletter">V</span> '; }
	else		{ ltv = '<a href="#V"><span class="klletter">V</span></a> '; }
  if (letter == "W")	{ ltw = '<span class="grletter">W</span> '; }
	else		{ ltw = '<a href="#W"><span class="klletter">W</span></a> '; }
  if (letter == "X")	{ ltx = '<span class="grletter">X</span> '; }
	else		{ ltx = '<a href="#X"><span class="klletter">X</span></a> '; }
  if (letter == "Y")	{ lty = '<span class="grletter">Y</span> '; }
	else		{ lty = '<a href="#Y"><span class="klletter">Y</span></a> '; }
  if (letter == "Z")	{ ltz = '<span class="grletter">Z</span> '; }
	else		{ ltz = '<a href="#Z"><span class="klletter">Z</span></a> '; }
  if (letter == "Ź")	{ ltzj = '<span class="grletter">Ź</span> '; letter = "ZJ"; }
	else		{ ltzj = '<a href="#ZJ"><span class="klletter">Ź</span></a> '; }
  if (letter == "Ż")	{ ltzz = '<span class="grletter">Ż</span> '; letter = "ZZ"; }
	else		{ ltzz = '<a href="#ZZ"><span class="klletter">Ż</span></a> '; }
  if (letter == "Ž")	{ ltzs = '<span class="grletter">Ž</span> '; letter = "ZS"; }
	else		{ ltzs = '<a href="#ZS"><span class="klletter">Ž</span></a> '; }
  if (letter == "А")	{ cya = '<span class="grletter">А</span> '; letter = "A"; }
	else		{ cya = '<a href="#A"><span class="klletter">А</span></a> '; }
  if (letter == "Б")	{ cyb = '<span class="grletter">Б</span> '; letter = "B"; }
	else		{ cyb = '<a href="#B"><span class="klletter">Б</span></a> '; }
  if (letter == "В")	{ cyv = '<span class="grletter">В</span> '; letter = "V"; }
	else		{ cyv = '<a href="#V"><span class="klletter">В</span></a> '; }
  if (letter == "Г")	{ cyg = '<span class="grletter">Г</span> '; letter = "G"; }
	else		{ cyg = '<a href="#G"><span class="klletter">Г</span></a> '; }
  if (letter == "Д")	{ cyd = '<span class="grletter">Д</span> '; letter = "D"; }
	else		{ cyd = '<a href="#D"><span class="klletter">Д</span></a> '; }
  if (letter == "Е")	{ cye = '<span class="grletter">Е</span> '; letter = "E"; }
	else		{ cye = '<a href="#E"><span class="klletter">Е</span></a> '; }
  if (letter == "Є")	{ cyie = '<span class="grletter">Є</span> '; letter = "E"; }
	else		{ cyie = '<a href="#IE"><span class="klletter">Є</span></a> '; }
  if (letter == "Ж")	{ cyzs = '<span class="grletter">Ж</span> '; letter = "ZS"; }
	else		{ cyzs = '<a href="#ZS"><span class="klletter">Ж</span></a> '; }
  if (letter == "З")	{ cyz = '<span class="grletter">З</span> '; letter = "Z"; }
	else		{ cyz = '<a href="#Z"><span class="klletter">З</span></a> '; }
  if (letter == "И")	{ cyi = '<span class="grletter">И</span> '; letter = "I"; }
	else		{ cyi = '<a href="#I"><span class="klletter">И</span></a> '; }
  if (letter == "Й")	{ cyj = '<span class="grletter">Й</span> '; letter = "J"; }
	else		{ cyj = '<a href="#J"><span class="klletter">Й</span></a> '; }
  if (letter == "Ј")	{ cyjj = '<span class="grletter">Ј</span> '; letter = "J"; }
	else		{ cyjj = '<a href="#J"><span class="klletter">Ј</span></a> '; }
  if (letter == "К")	{ cyk = '<span class="grletter">К</span> '; letter = "K"; }
	else		{ cyk = '<a href="#K"><span class="klletter">К</span></a> '; }
  if (letter == "Л")	{ cyl = '<span class="grletter">Л</span> '; letter = "L"; }
	else		{ cyl = '<a href="#L"><span class="klletter">Л</span></a> '; }
  if (letter == "Љ")	{ cylj = '<span class="grletter">Љ</span> '; letter = "LJ"; }
	else		{ cylj = '<a href="#LJ"><span class="klletter">Љ</span></a> '; }
  if (letter == "М")	{ cym = '<span class="grletter">М</span> '; letter = "M"; }
	else		{ cym = '<a href="#M"><span class="klletter">М</span></a> '; }
  if (letter == "Н")	{ cyn = '<span class="grletter">Н</span> '; letter = "N"; }
	else		{ cyn = '<a href="#N"><span class="klletter">Н</span></a> '; }
  if (letter == "Њ")	{ cynj = '<span class="grletter">Њ</span> '; letter = "NJ"; }
	else		{ cynj = '<a href="#NJ"><span class="klletter">Њ</span></a> '; }
  if (letter == "О")	{ cyo = '<span class="grletter">О</span> '; letter = "O"; }
	else		{ cyo = '<a href="#O"><span class="klletter">О</span></a> '; }
  if (letter == "П")	{ cyp = '<span class="grletter">П</span> '; letter = "P"; }
	else		{ cyp = '<a href="#P"><span class="klletter">П</span></a> '; }
  if (letter == "Р")	{ cyr = '<span class="grletter">Р</span> '; letter = "R"; }
	else		{ cyr = '<a href="#R"><span class="klletter">Р</span></a> '; }
  if (letter == "С")	{ cys = '<span class="grletter">С</span> '; letter = "S"; }
	else		{ cys = '<a href="#S"><span class="klletter">С</span></a> '; }
  if (letter == "Т")	{ cyt = '<span class="grletter">Т</span> '; letter = "T"; }
	else		{ cyt = '<a href="#T"><span class="klletter">Т</span></a> '; }
  if (letter == "У")	{ cyu = '<span class="grletter">У</span> '; letter = "U"; }
	else		{ cyu = '<a href="#U"><span class="klletter">У</span></a> '; }
  if (letter == "Ф")	{ cyf = '<span class="grletter">Ф</span> '; letter = "F"; }
	else		{ cyf = '<a href="#F"><span class="klletter">Ф</span></a> '; }
  if (letter == "Х")	{ cyh = '<span class="grletter">Х</span> '; letter = "H"; }
	else		{ cyh = '<a href="#H"><span class="klletter">Х</span></a> '; }
  if (letter == "Ц")	{ cyc = '<span class="grletter">Ц</span> '; letter = "C"; }
	else		{ cyc = '<a href="#C"><span class="klletter">Ц</span></a> '; }
  if (letter == "Ч")	{ cycz = '<span class="grletter">Ч</span> '; letter = "CZ"; }
	else		{ cycz = '<a href="#CZ"><span class="klletter">Ч</span></a> '; }
  if (letter == "Ш")	{ cysz = '<span class="grletter">Ш</span> '; letter = "SZ"; }
	else		{ cysz = '<a href="#SZ"><span class="klletter">Ш</span></a> '; }
  if (letter == "Ы")	{ cyy = '<span class="grletter">Ы</span> '; letter = "Y"; }
	else		{ cyy = '<a href="#Y"><span class="klletter">Ы</span></a> '; }
  if (letter == "Э")	{ cyhe = '<span class="grletter">Э</span> '; letter = "HE"; }
	else		{ cyhe = '<a href="#HE"><span class="klletter">Э</span></a> '; }
  if (letter == "Ю")	{ cyju = '<span class="grletter">Ю</span> '; letter = "JU"; }
	else		{ cyju = '<a href="#JU"><span class="klletter">Ю</span></a> '; }
  if (letter == "Я")	{ cyja = '<span class="grletter">Я</span> '; letter = "JA"; }
	else		{ cyja = '<a href="#JA"><span class="klletter">Я</span></a> '; }

  document.write('<br><hr><h4><a href="#top">(top)</a></h4></th>');
  document.write('<a name="' + letter + '"></a>');

  if ((lang == "1") || (lang == ""))
  { document.write('<center>'+lta+ltb+ltc+ltcz+ltd+lte+ltf+ltg+lth+lti+ltj+ltk+ltl+ltm+ltn+lto+ltp+ltr+lts+ltsz+ltt+ltu+ltv+lty+ltz+ltzs+'</center>'); }
  else if (lang == "91")
  { document.write('<center>'+lta+ltb+ltc+ltcj+ltcz+ltd+ltdzj+lte+ltf+ltg+ltgj+lth+lti+ltj+ltk+ltkj+ltl+ltlj+ltm+ltn+ltnj+lto+ltp+ltr+lts+ltsj+ltsz+ltt+lttj+ltu+ltv+ltz+ltzs+'</center>'); }
  else if (lang == "5")
  { document.write('<center>'+cya+cyb+cyv+cyg+cyd+cye+cyzs+cyz+cyi+cyjj+cyk+cyl+cylj+cym+cyn+cynj+cyo+cyp+cyr+cys+cyt+cyu+cyf+cyh+cyc+cycz+cysz+cyy+'</center>'); }
  else if (lang == "en")
  { document.write('<center>'+lta+ltb+ltc+ltd+lte+ltf+ltg+lth+lti+ltj+ltk+ltl+ltm+ltn+lto+ltp+ltq+ltr+lts+ltt+ltu+ltv+ltw+ltx+lty+ltz+'</center>'); }
  else if (lang == "pl")
  { document.write('<center>'+lta+ltb+ltc+ltcj+ltd+lte+ltf+ltg+lth+lti+ltj+ltk+ltl+ltll+ltm+ltn+lto+ltoo+ltp+ltr+lts+ltsj+ltt+ltu+ltv+ltw+lty+ltz+ltzj+ltzz+'</center>'); }

}

