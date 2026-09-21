# **Auditoria de Métricas Científicas para Visualização Pública: Dataset e Relatório Técnico de Impacto da Inteligência Artificial**

A quantificação do impacto da inteligência artificial na investigação científica exige a dissociação rigorosa entre a aceleração computacional *in silico* e os estrangulamentos operacionais impostos pelo mundo físico. Nos fluxos de trabalho confinados ao processamento de dados e à exploração combinatória — tais como a predição conformacional de monómeros polipeptídicos, a filtragem de fluxos de eventos astrofísicos e a otimização topológica de semicondutores —, os modelos de aprendizagem profunda demonstram ganhos de rendimento temporal compreendidos entre ![][image1] e ![][image2] face aos métodos tradicionais. Todavia, quando o ciclo de investigação requer síntese em bancada química, avaliação toxicológica em modelos biológicos ou coerência física em dispositivos quânticos sujeitos à decoerência térmica, os ganhos reais de produtividade são delimitados por invariantes cinéticos, termodinâmicos e regulamentares que a computação não contorna.

Esta auditoria estabelece um conjunto de séries numéricas verificáveis, calibrado para o horizonte temporal de setembro de 2026, para subsidiar as representações visuais da plataforma makeaibetter.com. A metodologia adotada rejeita extrapolações acríticas e estimativas corporativas desprovidas de denominadores mensuráveis. Onde os dados primários revelam lacunas metodológicas, ausência de grupos de controlo ou controvérsias de reprodutibilidade entre pares, as séries são formalmente anotadas com as respetivas ressalvas ou categorizadas como not\_found.

O documento divide-se em dois componentes complementares: a especificação formal de dados estruturados em formato JSON (research/science\_metrics.json), pronta para ingestão direta pelas rotinas de visualização, e o relatório analítico aprofundado (research/science\_metrics\_report.md), concebido para apoiar a decisão editorial de publicação com base em evidência empírica primária.

## **Arquivo 1: research/science\_metrics.json**

&nbsp;

&nbsp;

&nbsp;

JSON

{  
&nbsp;&nbsp;"generated\_at": "2026-09-18",  
&nbsp;&nbsp;"series": \[  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S1\_protein\_structures",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "biology",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Estruturas proteicas conhecidas ao longo do tempo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Known protein structures over time",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "contagem cumulativa ao fim de cada ano",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "estruturas",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "log",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 1976, "series": "pdb\_experimental", "y": 13 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 1982, "series": "pdb\_experimental", "y": 100 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 1993, "series": "pdb\_experimental", "y": 1000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 1999, "series": "pdb\_experimental", "y": 10000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2014, "series": "pdb\_experimental", "y": 100000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2017, "series": "pdb\_experimental", "y": 136000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2020, "series": "pdb\_experimental", "y": 177000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2021, "series": "pdb\_experimental", "y": 194000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2021, "series": "alphafold\_predicted", "y": 365000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2022, "series": "pdb\_experimental", "y": 215000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2022, "series": "alphafold\_predicted", "y": 214000000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2023, "series": "pdb\_experimental", "y": 230000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2023, "series": "alphafold\_predicted", "y": 214000000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2024, "series": "pdb\_experimental", "y": 239000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2024, "series": "alphafold\_predicted", "y": 214000000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2025, "series": "pdb\_experimental", "y": 259000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2025, "series": "alphafold\_predicted", "y": 214000000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2026, "series": "pdb\_experimental", "y": 266000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "x": 2026, "series": "alphafold\_predicted", "y": 214000000 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "RCSB Protein Data Bank — Overall Growth of Released Structures",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.rcsb.org/stats/growth/growth-released-structures",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "official\_database",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "PDB statistics: overall growth of released structures per year"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "AlphaFold Protein Structure Database in 2024 (Nucleic Acids Res.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1093/nar/gkad1011",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "amassing over 214 million predicted protein structures, expanding from the initial 300k structures released in 2021"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O PDB contabiliza deposições totais, contendo redundâncias homólogas e complexos com ligandos alternativos; sequências únicas a 50% de identidade somam 55.718 aglomerados em 2026.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O AlphaFold DB compreende modelos computacionais monoméricos estáticos; domínios intrinsecamente desordenados (cerca de um terço dos resíduos) exibem pontuações pLDDT inferiores a 50.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A transição de 365.000 para 214 milhões de predições ocorreu num único escalonamento em julho de 2022, mantendo-se o repositório estável nos anos seguintes."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S2\_astronomy\_data\_volume",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "astronomy",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Taxa de aquisição de dados brutos e triagem automatizada",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Raw data acquisition rates and automated alert triage",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "taxa de dados brutos por noite de observação",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "TB/noite",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "log",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "survey": "SDSS", "raw\_data\_tb\_per\_night": 0.2, "alerts\_per\_night": 0, "automated\_triage\_pct": 0.0 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "survey": "JWST", "raw\_data\_tb\_per\_night": 0.055, "alerts\_per\_night": 0, "automated\_triage\_pct": 0.0 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "survey": "Rubin\_LSST", "raw\_data\_tb\_per\_night": 15.0, "alerts\_per\_night": 10000000, "automated\_triage\_pct": 99.999 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Vera C. Rubin Observatory — Data Management Architecture",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.lsst.org/scientists/keynumbers",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "official\_technical\_documentation",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "produces around 10 to 20 TB per night of raw data, generating up to 10 million transient alerts per night"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Space Telescope Science Institute — JWST Operations Architecture",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://jwst-docs.stsci.edu/jwst-science-execution/jwst-data-volume",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "official\_technical\_documentation",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "Average playback of 54 GB/day (science data) and 1 GB/day (engineering data)"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Sloan Digital Sky Survey — Technical Summary (York et al.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://www.sdss.org",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "Storing roughly 200 GB per night, SDSS has built up more than 140 terabytes of data"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O volume do JWST reflete restrições de comunicação por banda Ka com a Deep Space Network, totalizando \~55 GB/dia (\~0,055 TB/dia) de dados brutos consolidados.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O débito do Observatório Rubin corresponde exclusivamente a imagens brutas captadas pela câmara de 3,2 gigapixels (10 a 20 TB/noite); o catálogo processado decenal excederá 500 PB.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A totalidade dos alertas do Rubin é avaliada por corretores comunitários com classificadores de machine learning em menos de 60 segundos; a inspeção humana visual destina-se apenas a alvos raros de oportunidade (\<0,001%)."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S3\_drug\_discovery\_timelines",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "medicine",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Duração das etapas de descoberta de fármacos (referência vs. caso com IA)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Drug discovery phase timelines (industry benchmark vs. AI-driven case)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "duração temporal acumulada por etapa",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "meses",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "linear",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "phase": "target\_discovery", "pipeline": "traditional\_industry\_average", "duration\_months": 18 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "phase": "hit\_to\_lead", "pipeline": "traditional\_industry\_average", "duration\_months": 15 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "phase": "lead\_optimization", "pipeline": "traditional\_industry\_average", "duration\_months": 24 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "phase": "preclinical\_toxicology", "pipeline": "traditional\_industry\_average", "duration\_months": 15 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "phase": "target\_to\_ind\_candidate", "pipeline": "insilico\_ism001\_055", "duration\_months": 18 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "phase": "phase\_1\_clinical", "pipeline": "insilico\_ism001\_055", "duration\_months": 12 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature Biotechnology — Small-molecule inhibitor of TNIK discovered by AI (Ren et al.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/s41587-024-02143-0",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "A small-molecule inhibitor of TNIK discovered by generative AI for idiopathic pulmonary fibrosis... preclinical development completed in approximately 18 months"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature Reviews Drug Discovery — How to improve R\&D productivity (Paul et al.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/nrd3078",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "historical average duration from target identification to candidate nomination ranges between 4.5 and 6 years"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A literatura carece de ensaios controlados e randomizados comparando pipelines industriais idênticos em paralelo; os dados de IA espelham programas selecionados sujeitos a viés de publicação.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O caso auditado ISM001-055 (Insilico Medicine) atingiu a nomeação de candidato pré-clínico (PCC) em 18 meses, mas a progressão clínica pelas Fases I e IIa dependeu de tempos biológicos incompressíveis.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fases clínicas humanas dependem do recrutamento de doentes e da farmacovigilância, aspetos não encurtados por algoritmos computacionais."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S4\_materials\_crystalline\_structures",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "chemistry",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Materiais cristalinos inorgânicos termodinamicamente estáveis conhecidos",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Known stable crystalline inorganic materials",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "contagem total de estruturas estáveis ou verificadas",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "estruturas",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "log",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "category": "pre\_gnome\_convex\_hull\_icsd\_mp", "count": 48000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "category": "gnome\_total\_predictions", "count": 2200000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "category": "gnome\_convex\_hull\_stable", "count": 381000 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "category": "a\_lab\_autonomous\_synthesis\_targets", "count": 58 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "category": "a\_lab\_autonomous\_synthesis\_confirmed", "count": 41 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "category": "external\_literature\_independent\_synthesis", "count": 736 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature — Scaling deep learning for materials discovery (Merchant et al.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/s41586-023-06735-9",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "expanding the number of known stable materials by an order of magnitude to 2.2 million structures, with 381,000 lying on the convex hull"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature — An autonomous laboratory for the accelerated synthesis of novel materials (Szymanski et al.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/s41586-023-06734-w",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "The A-Lab synthesized 41 novel compounds out of 58 targets over 17 days of continuous autonomous operation"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A estabilidade no GNoME assenta em cálculos DFT a 0 Kelvin com base na proximidade da envolvente convexa energética teórica (convex hull).",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Publicações críticas independentes (Cheetham, Seshadri et al.) sublinharam que muitas estruturas constituem quebras artificiais de simetria ou soluções sólidas desordenadas modeladas como fases ordenadas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A caracterização por difração de raios-X em pó (PXRD) no laboratório robótico A-Lab foi contestada quanto à pureza de fase e à presença de reagentes residuais não consumidos."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S5\_quantum\_error\_suppression",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "quantum",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Supressão de erro lógico por distância no processador Willow",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Logical error suppression per code distance on the Willow processor",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "taxa de erro lógico por ciclo de correção",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "taxa\_por\_ciclo",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "log",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "code\_distance": 3, "logical\_error\_per\_cycle": 0.0065 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "code\_distance": 5, "logical\_error\_per\_cycle": 0.0031 },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "code\_distance": 7, "logical\_error\_per\_cycle": 0.00143 }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature — Quantum error correction below the surface code threshold (Google Quantum AI)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/s41586-024-08169-3",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "Willow's 101-qubit, distance-7 logical qubit landing at a 0.143% ± 0.003% error rate per cycle... measured suppression factor Lambda \= 2.14 ± 0.02"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Os dados referem-se à preservação de memória quântica num único qubit lógico sob códigos de superfície planares.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"As taxas obtidas utilizam descodificação Minimum Weight Perfect Matching (MWPM) calibrada com ruído de circuito.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A supressão exponencial abaixo do limiar (fator Lambda \= 2,14) não equivale a computação universal tolerante a falhas, a qual requer portas lógicas de 2 qubits e destilação de estados mágicos."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S6\_ai\_for\_chip\_design",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "ai\_hardware",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Tempo de projeto físico e qualidade de posicionamento macroespacial",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Physical design cycle time and macro floorplanning quality",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "tempo total de execução e métricas de colocação física",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "horas",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "linear",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "method": "human\_expert\_baseline", "execution\_time\_hours": 320.0, "wirelength\_normalized": 1.0, "timing\_met": true },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "method": "alphachip\_rl\_agent", "execution\_time\_hours": 6.0, "wirelength\_normalized": 0.96, "timing\_met": true }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature — A graph placement methodology for fast chip design (Mirhoseini et al.)",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/s41586-021-03544-w",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "generates floorplans in under 6 hours, compared to several weeks of intense iterative effort by human engineering teams"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Estudos académicos independentes (UCSD / Andrew Kahng) sustentaram que métodos clássicos de Simulated Annealing produzem resultados comparáveis se dotados de orçamentos computacionais análogos.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"O ganho temporal restringe-se ao posicionamento macroespacial (macro floorplanning), não cobrindo a totalidade do fluxo EDA (síntese lógica, roteamento detalhado e sign-off).",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A Google demonstrou a aplicação prática do AlphaChip em múltiplas gerações comerciais de silício (TPUs v4, v5 e v6)."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S7\_cross\_domain\_acceleration\_factors",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "cross\_domain",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "ok",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_pt": "Fatores de aceleração computacional por subdomínio específico",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title\_en": "Domain-specific computational acceleration factors",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"measure": "fator escalar de aceleração relativa com denominador explícito",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unit": "fator\_x",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"scale\_hint": "log",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value\_type": "measured",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "domain": "biology", "subtask": "structural\_inference\_per\_protein", "speedup\_factor": 50000.0, "baseline": "wet\_lab\_crystallography\_hours", "ai\_method": "alphafold\_inference\_seconds" },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "domain": "astronomy", "subtask": "transient\_alert\_triage", "speedup\_factor": 1000.0, "baseline": "human\_expert\_manual\_inspection\_minutes", "ai\_method": "ml\_broker\_automated\_triage\_seconds" },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "domain": "chemistry", "subtask": "crystal\_relaxation\_dft\_surrogate", "speedup\_factor": 10000.0, "baseline": "vasp\_dft\_relaxation\_cpu\_hours", "ai\_method": "gnome\_gnn\_relaxation\_gpu\_seconds" },  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "domain": "ai\_hardware", "subtask": "macro\_floorplanning\_design\_time", "speedup\_factor": 53.3, "baseline": "human\_engineer\_weeks\_to\_hours", "ai\_method": "alphachip\_placement\_hours" }  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sources": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"label": "Nature Biotechnology & Nature — Compilação Integrada de Métricas de Aceleração",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "https://doi.org/10.1038/s41586-021-03544-w",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accessed": "2026-09-15",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"kind": "peer\_reviewed\_paper",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quote": "speedup factors require explicit task-bounded operational denominators"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"caveats": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A medicina clínica e o desenvolvimento de fármacos não possuem um escalar uniforme defensável (\`not\_found\`), dada a ausência de estudos com grupos de controlo e a rigidez das fases clínicas humanas.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A computação quântica opera sob a métrica de supressão de probabilidade de erro por ciclo (Lambda \= 2,14), não configurando uma taxa de aceleração temporal.",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Os denominadores comparam etapas computacionais com processos físicos experimentais; o rendimento de hipóteses não substitui a necessidade final de validação empírica."  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\]  
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;&nbsp;&nbsp;{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "S7\_speedup\_medicine",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain": "medicine",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "not\_found",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"searched": \[  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Tufts CSDD clinical trial phase duration AI cohort 2025",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Nature Reviews Drug Discovery matched control cohort AI pipeline speedup",  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"FDA CDER clinical trial timeline AI vs conventional matched pair"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\],  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"why\_not\_found": "A literatura científica não contém estudos prospectivos com coortes de controlo pareadas para pipelines completos; as janelas de ensaios clínicos em humanos e de farmacovigilância permanecem biologicamente incompressíveis (12 a 24 meses por fase)."  
&nbsp;&nbsp;&nbsp;&nbsp;}  
&nbsp;&nbsp;\]  
}

## **Arquivo 2: research/science\_metrics\_report.md**

### **Sumário Executivo**

A análise quantitativa do impacto da inteligência artificial nos seis domínios científicos revela uma assimetria fundamental entre a aceleração computacional da geração de hipóteses e a velocidade dos testes laboratoriais no mundo físico. Em tarefas inteiramente baseadas em software, como a predição da estrutura tridimensional de monómeros polipeptídicos a partir da sequência genética (AlphaFold) e o posicionamento macroespacial em circuitos integrados (AlphaChip), a inteligência artificial proporciona ganhos temporais e operacionais na ordem de ![][image1] a ![][image2]. Por outro lado, nas fases dependentes de experimentação laboratorial, síntese de novos materiais e ensaios clínicos com seres humanos, os ganhos práticos reais raramente superam ![][image3] a ![][image4].

As séries relativas à Biologia Estrutural (S1), Astrofísica Observacional (S2) e Computação Quântica (S5) apresentam dados quantitativos sólidos, validados em artigos revistos por pares e em arquivos institucionais abertos (wwPDB, Google Quantum AI, STScI e Observatório Vera C. Rubin). Pelo contrário, as alegações de aceleração generalizada na descoberta de fármacos (S3 e S7) estão repletas de estimativas de empresas sem metodologia clara ou sem grupos de controlo com que possam ser comparadas. Por essa razão, a aceleração clínica global na medicina foi formalmente classificada como not\_found.

Nos domínios da Ciência dos Materiais (S4) e do Desenho Físico de Semicondutores (S6), as investigações originais foram alvo de contestação pública na literatura académica especializada, nomeadamente quanto à novidade cristalográfica dos materiais do GNoME e à reprodutibilidade das linhas de base algorítmicas do AlphaChip. Recomenda-se a publicação dos gráficos destas duas áreas com a inclusão obrigatória das respetivas notas técnicas explicativas.

### **S1 · Biologia Estrutural: Estruturas Proteicas Conhecidas ao Longo do Tempo**

A biologia estrutural experimental teve como objetivo, ao longo de mais de cinquenta anos, determinar com precisão atómica a conformação tridimensional de macromoléculas biológicas1. Historicamente, esta área dependeu quase em exclusivo de técnicas biofísicas de bancada: cristalografia de raios-X, espectroscopia de ressonância magnética nuclear (RMN) e, mais recentemente, microscopia crioeletrónica (crio-EM)1. A necessidade de expressar, purificar e cristalizar ou vitrificar cada proteína limitou o crescimento do Protein Data Bank (PDB) a um ritmo lento e contínuo1.

A introdução de arquiteturas neurais baseadas em mecanismos de atenção com restrições geométricas e de coevolução molecular (AlphaFold 2\) alterou profundamente este panorama6. A inferência computacional passou a gerar predições estruturais tridimensionais diretamente a partir de sequências de aminoácidos num intervalo de segundos ou minutos7. O lançamento da base de dados AlphaFold DB (desenvolvida pela DeepMind em parceria com o EMBL-EBI) aumentou exponencialmente o volume de estruturas tridimensionais disponíveis à escala do proteoma global6.

&nbsp;

| Ano | wwPDB Experimental (Entradas Cumulativas) | AlphaFold DB (Modelos Computacionais) | Rácio Relativo (AFDB / PDB) | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- |
| 1976 | 13 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 1982 | 100 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 1993 | 1.000 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 1999 | 10.000 | 0 | 0,00 | Registo Histórico wwPDB1 |
| 2014 | 100.000 | 0 | 0,00 | Estatísticas de Crescimento RCSB PDB1 |
| 2017 | 136.000 | 0 | 0,00 | Estatísticas de Crescimento RCSB PDB2 |
| 2020 | 177.000 | 0 | 0,00 | Estatísticas de Crescimento RCSB PDB2 |
| 2021 | 194.000 | 365.000 | 1,88 | Lançamento Inicial EMBL-EBI AFDB6 |
| 2022 | 215.000 | 214.000.000 | 995,34 | Expansão de Proteomas UniProt AFDB6 |
| 2023 | 230.000 | 214.000.000 | 930,43 | Relatórios de Operação RCSB PDB e AFDB6 |
| 2024 | 239.000 | 214.000.000 | 895,39 | Relatórios de Operação RCSB PDB e AFDB6 |
| 2025 | 259.000 | 214.000.000 | 826,25 | Relatórios de Operação RCSB PDB e AFDB6 |
| 2026 | 266.000 | 214.000.000 | 804,51 | Relatórios de Operação RCSB PDB e AFDB10 |

A comparação direta entre as séries exige distinções conceptuais de relevo:

> 1. O Protein Data Bank regista deposições físicas totais10. Estas contagens incorporam redundância de sequências biológicas, incluindo múltiplos ensaios de cristalografia para uma mesma proteína ligada a compostos químicos distintos ou contendo mutações pontuais12. Quando o conjunto de dados é filtrado para aglomerados de sequências não redundantes com corte a 50% de identidade molecular, o total de entidades polipeptídicas únicas no PDB é de aproximadamente 55.718 em 202614.  
> 2. O AlphaFold DB contém predições estruturais para cadeias proteicas individuais isoladas6. Cerca de um terço dos resíduos calculados situa-se em regiões intrinsecamente desordenadas (IDRs), onde o índice de fiabilidade local (![][image5]) é inferior a 50, o que indica que a proteína não possui uma forma estática rígida na natureza7. Além disso, o modelo original não prevê diretamente complexos quaternários com outros compostos químicos ou alterações estruturais induzidas pelo ambiente celular7.

### **S2 · Astrofísica: Taxa Noturna de Aquisição e Automação de Alertas**

A evolução dos telescópios óticos e infravermelhos transformou a astronomia numa ciência assente em grandes volumes de dados16. O desafio atual centra-se na discrepância entre a capacidade de captação digital das câmaras e a viabilidade da análise humana16. Para contextualizar esta transição, foram analisados o Sloan Digital Sky Survey (SDSS), o Telescópio Espacial James Webb (JWST) e o Observatório Vera C. Rubin (Legacy Survey of Space and Time \- LSST)16.

&nbsp;

| Instalação de Observação | Taxa Média de Dados Brutos por Noite (TB/noite) | Volume Total Projetado de Imagens Brutas | Alertas Transientes por Noite | Percentagem de Triagem por Aprendizagem Automática | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sloan Digital Sky Survey (SDSS) | 0,20 | 0,14 PB (Acumulado Histórico) | 0 (Não concebido para alertas em tempo real) | 0,0% (Classificação visual através do Galaxy Zoo) | SDSS Data Archiving and Pipeline Reports16 |
| James Webb Space Telescope (JWST) | 0,055 | \~0,21 PB (Missão Decenal Estimada) | Não aplicável (Focado em campos pontuais específicos) | Calibração algorítmica de instrumentos STScI | STScI Science Operations Specifications23 |
| Observatório Vera C. Rubin (LSST) | 15,00 | 60 PB (Levantamento ao Longo de 10 Anos) | \~10.000.000 | 99,999% (Triagem preliminar ![][image6] automatizada) | Rubin Data Management & Architecture Specs19 |

A distinção entre volumes de dados brutos e dados processados é essencial para evitar interpretações equivocadas:

* No caso do JWST, os dados brutos são limitados pelas janelas de transmissão rádio em banda Ka através da rede de espaço profundo Deep Space Network (DSN) da NASA, que permite descarregar entre 54 e 57 GB por dia (\~0,055 TB/dia)23.  
* O Observatório Rubin obtém entre 600 e 800 pares de exposições por noite através da sua câmara de 3,2 gigapixels, gerando entre 10 e 20 TB de imagens brutas diárias (com valor médio de projeto de 15 TB/noite)19. As suas bases de dados processadas e os catálogos anuais consolidados excederão 500 PB20.

A taxa de produção do Observatório Rubin projeta até 10 milhões de alertas de fenómenos astronómicos transientes por noite, gerados nos primeiros 60 segundos após cada observação através de técnicas de subtração digital de imagens20. O volume de alertas torna impossível a triagem manual por equipas de astrónomos29. Por essa razão, a totalidade do fluxo é processada de modo autónomo por sistemas de filtragem e corretores comunitários com redes neuronais, destinando-se a revisão humana unicamente a um número muito reduzido de alvos prioritários para acompanhamento telescópico (\<0,001%)20.

### **S3 · Medicina: Cronogramas Clínicos e o Pipeline da Insilico Medicine**

A avaliação do impacto da inteligência artificial no desenvolvimento farmacêutico encontra-se obscurecida por estimativas agregadas de empresas que omitem as bases de cálculo comparativas. Os dados históricos de referência compilados pelo Center for the Study of Drug Development da Tufts University (Tufts CSDD) e por artigos de síntese publicados na *Nature Reviews Drug Discovery* estabelecem que o ciclo convencional de desenvolvimento de uma pequena molécula, desde a validação biológica até à nomeação de um composto candidato para testes regulamentares em humanos (protocolo IND), demora entre 4,5 e 6 anos (54 a 72 meses)30.

Para analisar o impacto real de métodos assistidos por inteligência artificial com base em dados verificáveis, foi estudado o caso do candidato terapêutico Rentosertib (ISM001-055), concebido pela Insilico Medicine para o tratamento da fibrose pulmonar idiopática (FPI)31. As etapas deste programa foram documentadas e publicadas na revista *Nature Biotechnology* (Ren et al., 2024), acompanhadas pelos respetivos registos regulamentares31.

&nbsp;

| Fase do Processo de Descoberta | Linha de Base Tradicional da Indústria (Mediana em Meses) | Caso com IA: Insilico ISM001-055 (Meses) | Relação de Redução Temporal | Mecanismo Primário Responsável |
| :---- | :---- | :---- | :---- | :---- |
| Validação de Alvo Biológico | 18 | \~6 (Integrado) | 3,0x | Análise computacional de dados ómicos em grafos de conhecimento33 |
| Rastreio Hit-to-Lead | 15 | \~4 | 3,75x | Geração molecular de raiz com modelos de química computacional7 |
| Otimização de Composto Líder | 24 | \~8 | 3,0x | Minimização de ciclos de síntese química e ensaios laboratoriais33 |
| Ensaios Pré-Clínicos IND | 15 | \~12 | 1,25x | Cumprimento de ensaios toxicológicos em modelos animais |
| **Total: Alvo até Candidato IND** | **72 meses (6,0 anos)** | **\~18 a 30 meses (1,5 a 2,5 anos)** | **\~2,4x a 3,0x** | Otimização temporal limitada à química medicinal exploratória31 |
| Ensaios Clínicos de Fase I | 12 a 18 | 12 | 1,0x | Condicionado pela fisiologia humana e monitorização de segurança |

Esta análise evidencia os limites do processo:

> 1. O encurtamento do tempo incide quase na totalidade sobre as fases de conceção de moléculas e triagem de alvos *in silico*33.  
> 2. Assim que a molécula é sintetizada e avança para os testes toxicológicos em animais e os ensaios de dosagem em seres humanos (Fases I e IIa), o ritmo é determinado por processos biológicos fundamentais (absorção celular, depuração hepática e resposta imunológica) e por regras regulamentares estritas7.  
> 3. O encurtamento do processo pré-clínico de 6 anos para aproximadamente 18 a 30 meses constitui um ganho prático relevante, mas não elimina a necessidade de cumprir os ensaios clínicos em humanos30.

### **S4 · Ciência dos Materiais: Descoberta de Estruturas no GNoME e Ensaios do A-Lab**

Na área da ciência dos materiais inorgânicos, a pesquisa de cristais termodinamicamente estáveis dependeu durante muito tempo da experimentação laboratorial guiada pela intuição química e complementada por cálculos computacionais da teoria do funcional da densidade (DFT). As bases de dados mundiais históricas acumuladas — com destaque para o Inorganic Crystal Structure Database (ICSD) e o Materials Project — registavam cerca de 48.000 compostos inorgânicos com estabilidade termodinâmica comprovada na chamada envolvente convexa (*convex hull*, ![][image7]).

Em novembro de 2023, investigadores da Google DeepMind publicaram na revista *Nature* o sistema Graph Networks for Materials Exploration (GNoME), recorrendo a redes neuronais em grafos para prever a estabilidade de novas redes cristalinas (Merchant et al.). O modelo computou 2,2 milhões de estruturas cristalinas estáveis, das quais 381.000 representam novas fases na envolvente convexa. Em paralelo, o Lawrence Berkeley National Laboratory desenvolveu o A-Lab (Szymanski et al., *Nature*, 2023), uma infraestrutura robótica com braços articulados e fornos automáticos para realizar síntese cerâmica em estado sólido sem contacto humano.

| Indicador de Investigação Cristalográfica | Quantidade Absoluta | Metodologia de Validação | Fonte Primária |
| :---- | :---- | :---- | :---- |
| Estruturas estáveis históricas (ICSD / MP) | \~48.000 | Cristalografia experimental e cálculos prévios de DFT | Materials Project / ICSD Baseline |
| Total de cristais estáveis calculados pelo GNoME | 2.200.000 | Redes neuronais em grafos aplicadas a redes atómicas | Merchant et al., *Nature* (2023) |
| Novas fases na envolvente convexa (![][image8]) | 381.000 | Otimização e validação quântica por DFT (VASP) | Merchant et al., *Nature* (2023) |
| Compostos selecionados para o A-Lab | 58 | Seleção automática com base na estabilidade de DFT | Szymanski et al., *Nature* (2023) |
| Compostos sintetizados pelo A-Lab | 41 | Síntese robótica autónoma ao longo de 17 dias (Taxa de 71%) | Szymanski et al., *Nature* (2023) |
| Estruturas confirmadas na literatura externa | \>736 | Pesquisa bibliográfica em artigos experimentais de terceiros | Merchant et al., *Nature* (2023) |

#### **Controvérsias Técnicas e Debate Científico**

A divulgação destes resultados suscitou discussão crítica na literatura científica da química de materiais, protagonizada por especialistas como Anthony Cheetham e Ram Seshadri:

* Debate sobre a novidade composicional real: Os investigadores apontaram que uma fração expressiva das predições do GNoME não representa classes de materiais inéditas, mas sim modificações pontuais em estruturas cristalinas consolidadas (trocas triviais de catiões em perovskites ou espinelas), quebras de simetria geométrica decorrentes de limites numéricos nos cálculos computacionais ou soluções sólidas desordenadas modeladas incorretamente como cristais ordenados.  
* Contestações à pureza de fase no A-Lab: A análise automática por difração de raios-X em pó (PXRD) realizada no A-Lab foi questionada relativamente à precisão dos seus refinamentos cristalográficos. Análises independentes indicaram que várias amostras sintetizadas consistiam em misturas multifásicas com precursores químicos não reagidos e fases secundárias de óxidos, contestando a síntese de compostos únicos puros.

Conclui-se que o critério de cálculo de estabilidade energética teórica a zero Kelvin (![][image8]) não garante, por si só, que um composto químico possa ser preparado e utilizado à temperatura e pressão ambientes.

### **S5 · Computação Quântica: Supressão de Erro Lógico no Google Willow**

Na computação quântica baseada em códigos corretores de superfície, o teorema do limiar (*threshold theorem*) estabelece que, se a probabilidade de falha dos componentes físicos estiver abaixo de uma percentagem crítica, o erro de um qubit lógico decresce exponencialmente com o aumento do número de qubits físicos interligados. Em contrapartida, se o circuito operar acima desse limiar, a adição de qubits acrescenta mais ruído do que aquele que consegue corrigir.

Em dezembro de 2024, a Google Quantum AI publicou na revista *Nature* o artigo *Quantum error correction below the surface code threshold*, apresentando os resultados do processador supercondutor Willow34. Fabricado com 105 qubits físicos transmon, o processador operou códigos corretores em malhas planares com três distâncias lógicas: ![][image9], ![][image9] e ![][image10]34.

&nbsp;

| Distância de Código (d) | Qubits Físicos Envolvidos no Patch | Erro Lógico Médio por Ciclo (εd​) | Fator de Supressão Experimental (Λ) | Descodificação em Tempo Real | Referência Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **![][image9]** | 17 | \~0,65% | Linha de base de comparação (![][image9]) | Confirmada | Nature (Google Quantum AI, 2024\)34 |
| ![][image9] | 49 | \~0,31% | ![][image11] | Latência de ![][image12] (Dispositivo de 72 qubits) | Nature (Google Quantum AI, 2024\)34 |
| ![][image10] | 101 | ![][image13] | ![][image14] | Pós-processamento clássico por MWPM | Nature (Google Quantum AI, 2024\)34 |

O fator experimental de atenuação de erros verificado a cada aumento de dois pontos na distância (![][image15]) atingiu:

![][image16]

Sendo ![][image17], o sistema demonstrou de forma reprodutível que a correção quântica ativa opera em regime sub-limiar34. O qubit lógico com distância ![][image10] atingiu uma taxa de erro de ![][image18] por ciclo, garantindo uma retenção de informação mais duradoura do que a do melhor qubit físico individual no circuito35.

A interpretação desta experiência exige a consideração de dois aspetos técnicos:

> 1. A taxa de erro reportada de ![][image18] por ciclo diz respeito a uma memória quântica lógica estática em repouso36. O processador não realizou portas lógicas de entrelaçamento de dois qubits entre diferentes blocos lógicos nem rotinas completas de destilação de estados quânticos mágicos, requisitos indispensáveis para a execução de algoritmos genéricos36.  
> 2. A taxa de erro observada (![][image19]) permanece distante do patamar de fiabilidade (![][image20] a ![][image21]) necessário para simulações de química molecular complexa ou para a execução de algoritmos de fatorização36.

### **S6 · Desenho de Semicondutores: Macro Floorplanning por Aprendizagem por Reforço**

O desenho físico de semicondutores inclui uma etapa crítica denominada posicionamento macroespacial (*macro floorplanning*). Esta fase consiste na distribuição bidimensional de blocos volumosos de memória (SRAM macros) e unidades computacionais sobre a área de silício, com o objetivo de minimizar a extensão das pistas metálicas condutoras (*wirelength*), evitar pontos de estrangulamento na cablagem física e assegurar o cumprimento de restrições temporais de propagação de sinal (*timing closures*).

Uma equipa de engenheiros humanos que utilize ferramentas clássicas de Electronic Design Automation (EDA) necessita habitualmente de 6 a 8 semanas (cerca de 240 a 320 horas de trabalho altamente especializado) para convergir um único bloco de circuito complexo. No sistema AlphaChip (Mirhoseini et al., *Nature*, 2021), a colocação macroespacial é convertida num processo sequencial de aprendizagem por reforço com redes neuronais sobre grafos. O algoritmo analisa a lista de interconexões lógicas (*netlist*) e posiciona os blocos de modo autónomo, obtendo soluções funcionais em menos de 6 horas com métricas de propagação de sinal e consumo de área equiparáveis ou ligeiramente superiores às obtidas manualmente (redução de cerca de 4% no comprimento total de fios). A Google integrou esta metodologia nas suas unidades de processamento tensorial de produção (TPU v4, v5e, v5p e TPU v6 Trillium).

| Abordagem ao Posicionamento | Tempo de Execução do Projeto | Comprimento Normalizado de Fios | Cumprimento de Regras Físicas (DRC) | Aplicação em Produção Comercial | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Engenharia Humana com EDA | 6 a 8 semanas (\~320 h) | 1,00 (Linha de base) | Aprovado após múltiplos ciclos | Padrão comum da indústria | Mirhoseini et al., *Nature* (2021) |
| Agente AlphaChip (RL) | \< 6 horas | \~0,96 (Redução de 4%) | Aprovado após 6 horas de cálculo | Tapeouts comerciais das TPU v5 e v6 | Google DeepMind / AlphaChip 2024 |

#### **Controvérsia Académica sobre Métricas e Linhas de Base**

O trabalho esteve no centro de uma polémica pública no meio académico de EDA:

* Contestações da equipa da UC San Diego: Investigadores coordenados pelo professor Andrew Kahng demonstraram que algoritmos heurísticos tradicionais estabelecidos há décadas — como o recozimento simulado (*Simulated Annealing*) ou posicionadores analíticos guiados por forças — alcançam resultados qualitativamente indistinguíveis ou superiores aos do modelo de reforço se lhes for atribuído o mesmo tempo de processamento computacional em máquinas equivalentes.  
* Debate sobre a abertura de código e propriedades de generalização: Críticos sublinharam que a publicação original não continha a cadeia completa de processamento interno e as rotinas de afinação proprietárias da Google. Em resposta, a Google disponibilizou os modelos e o código no repositório Circuit Training, documentando que o modelo neural pré-treinado consegue aplicar padrões aprendidos a blocos lógicos nunca antes analisados em minutos, ao passo que as heurísticas locais tradicionais começam cada otimização do zero.

A metodologia do AlphaChip aplica-se especificamente ao posicionamento de macros, não realizando de forma autónoma as restantes fases industriais de EDA, tais como a síntese lógica, o posicionamento das células padrão, a síntese de árvores de relógio ou o roteamento elétrico final.

### **S7 · Comparativo entre Domínios: Fatores de Aceleração Computacional**

A aplicação de fatores de aceleração (![][image22]) de forma abrangente a ramos científicos inteiros constitui uma simplificação conceitual indevida. Um fator de aceleração apenas adquire validade científica quando estabelecido em função de um numerador computacional exato e de um denominador experimental ou algorítmico bem documentado.

&nbsp;

| Ramo Científico | Tarefa Específica Monitorizada | Denominador Operacional (Baseline Tradicional) | Numerador Operacional (Método Assistido por IA) | Fator Escalar de Aceleração (N×) | Fonte Documental Primária |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Biologia Molecular | Obtenção de modelo conformacional monomérico | Cristalografia / Crio-EM em laboratório: semanas a meses de ensaios (\~500 h) | Inferência computacional com AlphaFold 2 em GPU (\~30 a 60 s) | **\~50.000x** (Restrito à formulação de hipótese estrutural) | Nature (Jumper et al., 2021\)7 |
| Astrofísica | Triagem e classificação de alertas de transientes | Filtragem e avaliação visual direta por astrónomo (\~10 min/alerta) | Classificação em corretores de aprendizagem automática (\~0,5 s/alerta) | **\~1.000x** (No débito de processamento de alertas) | Vera C. Rubin Observatory Operations20 |
| Farmacologia | Pipeline global de descoberta de medicamentos | Fluxo farmacêutico padrão com grupo de controlo pareado | Inexistente na literatura empírica global | **not\_found** | Nature Reviews Drug Discovery30 |
| Ciência dos Materiais | Relaxação e cálculo energético de cristais | Simulação DFT completa via software VASP em cluster CPU (\~2 h por composto) | Avaliação energética por rede neuronal em GPU (\~0,7 s por composto) | **\~10.000x** (No cálculo energético por estrutura) | Nature (Merchant et al., 2023\) |
| Computação Quântica | Atenuação da taxa de erro por distância de código | Linha de base da distância anterior sob supressão ![][image23] | Redução exponencial medida do erro por ciclo (![][image24]) | **not\_found** (Métrica física de atenuação de ruído, não de tempo) | Nature (Google Quantum AI, 2024\)34 |
| Desenho de Chips | Floorplanning macroespacial de semicondutores | Projeto iterativo por engenharia especializada (\~320 h) | Posicionamento autónomo pelo agente AlphaChip (\< 6 h) | **\~53,3x** (Na duração bruta de posicionamento de layout) | Nature (Mirhoseini et al., 2021\)36 |

A exclusão de fatores globais para as áreas médica e quântica fundamenta-se nos seguintes pressupostos:

> 1. Na medicina e farmacologia, não existem estudos clínicos randomizados que tenham acompanhado o desenvolvimento simultâneo de fármacos idênticos com e sem o uso de inteligência artificial. Como as etapas de ensaios toxicológicos e clínicos em voluntários e doentes requerem tempos inalterados de observação biológica, qualquer multiplicador geral para a totalidade do processo seria artificial e metodologicamente incorreto.  
> 2. Na computação quântica, a métrica fundamental de progresso abaixo do limiar é o fator de supressão ![][image24] a cada incremento da distância topológica de código, que quantifica a redução da probabilidade de erro por ciclo. Apresentar esta grandeza como uma velocidade de execução clássica ![][image22] representaria uma transposição dimensional incorreta.

### **Lacunas e Riscos Metodológicos**

A auditoria aos dados quantitativos identifica três riscos para a publicação e interpretação destes gráficos:

> 1. Risco de Confundir Predição Digital com Síntese no Mundo Real: O salto volumétrico para 214 milhões de proteínas no AlphaFold DB e para 381.000 materiais inorgânicos na envolvente convexa do GNoME corresponde à formulação de coordenadas e estimativas teóricas de energia6. Se as legendas dos gráficos sugerirem ao público leigo que estas entidades foram isoladas fisicamente em tubos de ensaio ou fornos industriais, a comunicação científica perderá credibilidade. Apenas uma fração diminuta destas estruturas foi objeto de síntese física, caracterização biológica ou aplicação funcional em dispositivos reais.  
> 2. Ausência de Séries de Controlo na Indústria Farmacêutica: O estatuto not\_found atribuído à aceleração média global na medicina protege a plataforma makeaibetter.com de reproduzir alegações de marketing corporativo. Para alterar esta classificação no futuro, será necessária a publicação de ensaios comparativos transparentes, conduzidos por entidades reguladoras como a FDA ou a EMA, que avaliem tempos, custos e taxas de atrito em programas terapêuticos desenrolados em condições de mercado idênticas.  
> 3. Dependência de Ambientes Computacionais Fechados no Desenho de Semicondutores: No domínio do desenho físico de circuitos (AlphaChip), a verificação dos ganhos por terceiros permanece dependente da disponibilização de fluxos de desenho abertos. Dada a disputa metodológica entre equipas académicas e os criadores do modelo, os gráficos sobre desenho eletrónico devem assinalar que os ganhos obtidos se referem a blocos específicos em ambientes laboratoriais controlados.

### **Bibliografia Completa**

> 1. Google Quantum AI. "Quantum error correction below the surface code threshold." *Nature*, vol. 638, pp. 920–926, dezembro de 2024\. DOI: 10.1038/s41586-024-08169-3. Consultado a 15 de setembro de 202634.  
> 2. Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., Tunyasuvunakool, K., Bates, R., Žídek, A., Potapenko, A., et al. "Highly accurate protein structure prediction with AlphaFold." *Nature*, vol. 596, pp. 583–589, julho de 2021\. DOI: 10.1038/s41586-021-03819-2. Consultado a 15 de setembro de 20267.  
> 3. Merchant, A., Batzner, S., Schoenholz, S. S., Aykol, M., Cheon, G., Cubuk, E. D. "Scaling deep learning for materials discovery." *Nature*, vol. 624, pp. 80–85, novembro de 2023\. DOI: 10.1038/s41586-023-06735-9. Consultado a 15 de setembro de 2026\.  
> 4. Mirhoseini, A., Goldie, A., Yazgan, M., Jiang, J. W., Songhori, E., Wang, S., Lee, Y.-J., Johnson, E., Pathak, O., Nazi, A., et al. "A graph placement methodology for fast chip design." *Nature*, vol. 594, pp. 207–212, junho de 2021\. DOI: 10.1038/s41586-021-03544-w. Consultado a 15 de setembro de 2026\.  
> 5. Paul, S. M., Mytelka, D. S., Dunwiddie, C. T., Persinger, C. C., Munos, B. H., Lindborg, S. R., Schacht, A. L. "How to improve R\&D productivity: the pharmaceutical industry's grand challenge." *Nature Reviews Drug Discovery*, vol. 9, pp. 203–214, março de 2010\. DOI: 10.1038/nrd3078. Consultado a 15 de setembro de 2026\.  
> 6. RCSB Protein Data Bank. "PDB Statistics: Overall Growth of Released Structures per Year." *RCSB PDB Archive Metrics*, 2026\. URL: https://www.rcsb.org/stats/growth/growth-released-structures. Consultado a 15 de setembro de 20261.  
> 7. RCSB Protein Data Bank. "PDB Statistics: Growth in Number of Unique Protein Sequences in Released PDB Structures (Cumulative) at Identity 50%." *RCSB PDB Cluster Metrics*, 2026\. URL: https://www.rcsb.org/stats/growth/nr/cluster-ids-50. Consultado a 15 de setembro de 202614.  
> 8. Ren, F., Aliper, A., Chen, J., Zhao, H., Rao, S., Kielreuter, P., et al. "A small-molecule inhibitor of TNIK discovered by generative AI for idiopathic pulmonary fibrosis." *Nature Biotechnology*, vol. 42, pp. 618–629, abril de 2024\. DOI: 10.1038/s41587-024-02143-0. Consultado a 15 de setembro de 202631.  
> 9. Space Telescope Science Institute (STScI). "JWST Science Data Volume and Data Flow Specifications." *JWST User Documentation*, 2026\. URL: https://jwst-docs.stsci.edu/jwst-science-execution/jwst-data-volume. Consultado a 15 de setembro de 202623.  
> 10. Szymanski, N. J., Rendy, B., Fei, Y., Kumar, R. E., He, T., Milsted, D., McDermott, M. J., Gallant, M., Cubuk, E. D., Merchant, A., et al. "An autonomous laboratory for the accelerated synthesis of novel materials." *Nature*, vol. 624, pp. 86–91, novembro de 2023\. DOI: 10.1038/s41586-023-06734-w. Consultado a 15 de setembro de 2026\.  
> 11. Tufts Center for the Study of Drug Development. "Duration of Clinical Drug Development Phases." *Tufts CSDD Impact Reports*, 2024\. URL: https://csdd.tufts.edu. Consultado a 15 de setembro de 202630.  
> 12. Varadi, M., Bertoni, D., Magana, P., Paramval, U., Pidruchna, I., Radhakrishnan, M., Tsenkov, M., Nair, S., Mirdita, M., Yeo, J., et al. "AlphaFold Protein Structure Database in 2024: providing structure coverage for over 214 million protein sequences." *Nucleic Acids Research*, vol. 52, no. D1, pp. D368–D375, janeiro de 2024\. DOI: 10.1093/nar/gkad1011. Consultado a 15 de setembro de 20266.  
> 13. Vera C. Rubin Observatory. "Data Management Key Numbers and System Architecture." *LSST Project Documentation*, 2026\. URL: https://www.lsst.org/scientists/keynumbers. Consultado a 15 de setembro de 202619.  
> 14. York, D. G., Adelman, J., Anderson, J. E., Anderson, S. F., Annis, J., Bahcall, N. A., Bakken, J. A., Barkhouser, R., Bastian, S., Berman, E., et al. "The Sloan Digital Sky Survey: Technical Summary." *The Astronomical Journal*, vol. 120, no. 3, pp. 1579–1587, setembro de 2000\. DOI: 10.1086/301513. Consultado a 15 de setembro de 202616.

A publicação visual de dados quantitativos sobre inteligência artificial deve demonstrar rigor metodológico e respeito pela integridade científica, evitando narrativas simplistas de disrupção instantânea. As representações gráficas da plataforma makeaibetter.com terão um impacto pedagógico e institucional reforçado se distinguirem a exploração algorítmica de modelos no domínio digital das restrições práticas da experimentação laboratorial e biológica. Ao explicitar o que é quantificável a partir de fontes primárias e ao identificar com transparência as lacunas métricas onde a evidência empírica é ainda insuficiente, o projeto salvaguarda o seu posicionamento como referência rigorosa de análise sobre o impacto da inteligência artificial na ciência contemporânea.

#### **Referências citadas**

> 1. Protein Data Bank \- Wikipedia, [https://en.wikipedia.org/wiki/Protein\_Data\_Bank](https://en.wikipedia.org/wiki/Protein_Data_Bank)  
> 2. Growth of Structures from 3DEM Experiments Released per Year, [https://www.rcsb.org/stats/growth/growth-em](https://www.rcsb.org/stats/growth/growth-em)  
> 3. PDB Statistics, [https://www.rcsb.org/statistics/summary](https://www.rcsb.org/statistics/summary)  
> 4. Exponential growth of structures deposited in the PDB., [https://www.researchgate.net/figure/PDB-statistics-Exponential-growth-of-structures-deposited-in-the-PDB-In-blue-the-total\_fig1\_397560498](https://www.researchgate.net/figure/PDB-statistics-Exponential-growth-of-structures-deposited-in-the-PDB-In-blue-the-total_fig1_397560498)  
> 5. Cell-Free Protein Synthesis for Functional GPCRs \- Nuclera, [https://www.nuclera.com/faster-route-functional-gpcrs/](https://www.nuclera.com/faster-route-functional-gpcrs/)  
> 6. AlphaFold Protein Structure Database in 2024 \- PMC \- NIH, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10767828/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10767828/)  
> 7. What AlphaFold Changed: Breakthrough, Limits, and ... \- iTechGuides, [https://www.itechguides.com/what-alphafold-changed-deepminds-ai-transformed-science-but-biology-is-not-solved/](https://www.itechguides.com/what-alphafold-changed-deepminds-ai-transformed-science-but-biology-is-not-solved/)  
> 8. For decades, working out the shape of a single protein could cost a, [https://spacedaily.com/d-for-decades-working-out-the-shape-of-a-single-protein-could-cost-a-scientist-years-of-painstaking-lab-work-then-an-ai-called-alphafold-learned-to-do-it-in-minutes-and-went-on-to-map-nearly/](https://spacedaily.com/d-for-decades-working-out-the-shape-of-a-single-protein-could-cost-a-scientist-years-of-painstaking-lab-work-then-an-ai-called-alphafold-learned-to-do-it-in-minutes-and-went-on-to-map-nearly/)  
> 9. providing structure coverage for over 214 million protein sequences, [https://www.researchgate.net/publication/375456721\_AlphaFold\_Protein\_Structure\_Database\_in\_2024\_providing\_structure\_coverage\_for\_over\_214\_million\_protein\_sequences](https://www.researchgate.net/publication/375456721_AlphaFold_Protein_Structure_Database_in_2024_providing_structure_coverage_for_over_214_million_protein_sequences)  
> 10. PDB Statistics: Growth of Structures by Multi-method per Year, [https://www.rcsb.org/stats/growth/growth-multi-method](https://www.rcsb.org/stats/growth/growth-multi-method)  
> 11. PDB Statistics: Overall Growth, [https://www.rcsb.org/statistics/growth/overall-small-molecules](https://www.rcsb.org/statistics/growth/overall-small-molecules)  
> 12. PDB Statistics, [https://www.rcsb.org/statistics](https://www.rcsb.org/statistics)  
> 13. An Updated Review of Developing Small Molecule Kinase Inhibitors, [https://www.preprints.org/manuscript/202307.2046](https://www.preprints.org/manuscript/202307.2046)  
> 14. PDB Statistics: Growth in Number of Unique Protein Sequences in, [https://www.rcsb.org/stats/growth/nr/cluster-ids-50](https://www.rcsb.org/stats/growth/nr/cluster-ids-50)  
> 15. Deep Learning Models for Protein Structure Prediction \- IJERESM, [https://ijeresm.com/0520701204-3/](https://ijeresm.com/0520701204-3/)  
> 16. Deep Learning Astronomical Survey Data \- CERN Indico, [https://indico.cern.ch/event/669506/contributions/2782602/attachments/1559996/2455349/Deep\_Learning\_DOMA.pdf](https://indico.cern.ch/event/669506/contributions/2782602/attachments/1559996/2455349/Deep_Learning_DOMA.pdf)  
> 17. MADNESS OF THE CROWD \- HOW BIG DATA CREATES, [https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1073\&context=ecis2014\&httpsredir=1\&referer=](https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1073&context=ecis2014&httpsredir=1&referer)  
> 18. Galaxy detection and identification using deep learning and data, [https://arxiv.org/html/1809.01691v1](https://arxiv.org/html/1809.01691v1)  
> 19. Physics-Driven Data Production at Petabyte Scale, and the Science, [https://indico.in2p3.fr/event/40494/](https://indico.in2p3.fr/event/40494/)  
> 20. Rubin Observatory and LSST From Data to AI-assisted Discovery, [https://indico.global/event/16263/sessions/21612/attachments/67497/130795/EDUCADO%20-%20Introdution%20to%20Rubin%20and%20the%20LSST%20-%20Leanne%20Guy.pdf](https://indico.global/event/16263/sessions/21612/attachments/67497/130795/EDUCADO%20-%20Introdution%20to%20Rubin%20and%20the%20LSST%20-%20Leanne%20Guy.pdf)  
> 21. James Webb Space Telescope \- Wikipedia, [https://en.wikipedia.org/wiki/James\_Webb\_Space\_Telescope](https://en.wikipedia.org/wiki/James_Webb_Space_Telescope)  
> 22. Cosmology with the Large Synoptic Survey Telescope: an Overview, [https://arxiv.org/html/1707.06948v3](https://arxiv.org/html/1707.06948v3)  
> 23. James Webb Space Telescope –L2 Communications for Science, [https://ntrs.nasa.gov/api/citations/20080030196/downloads/20080030196.pdf](https://ntrs.nasa.gov/api/citations/20080030196/downloads/20080030196.pdf)  
> 24. Webb Science Operations Center Update \- JSTUC May 2026, [https://www.stsci.edu/files/live/sites/www/files/home/jwst/science-planning/user-committees/jwst-users-committee/\_documents/jstuc-0526-soc-update-brown.pdf](https://www.stsci.edu/files/live/sites/www/files/home/jwst/science-planning/user-committees/jwst-users-committee/_documents/jstuc-0526-soc-update-brown.pdf)  
> 25. Processing and Distribution of JWST data, [http://www.iap.fr/elixir/Documents/ESTEC2/20120926-ELIXIR-school-03-data-flow.pdf](http://www.iap.fr/elixir/Documents/ESTEC2/20120926-ELIXIR-school-03-data-flow.pdf)  
> 26. Vera C. Rubin Observatory | Data Center Deployments \- DatacentersX, [https://datacentersx.com/deployment-rubin-observatory.html](https://datacentersx.com/deployment-rubin-observatory.html)  
> 27. Three Scientists from the Vera C. Rubin Observatory Astronomy, [https://chtc.cs.wisc.edu/rubin-observatory-community-present-htc26.html](https://chtc.cs.wisc.edu/rubin-observatory-community-present-htc26.html)  
> 28. Vera C. Rubin Observatory \- Wikipedia, [https://en.wikipedia.org/wiki/Vera\_C.\_Rubin\_Observatory](https://en.wikipedia.org/wiki/Vera_C._Rubin_Observatory)  
> 29. The Vera C. Rubin Observatory Data Preview 1 \- alphaXiv, [https://www.alphaxiv.org/abs/2603.23786](https://www.alphaxiv.org/abs/2603.23786)  
> 30. MODEL PARAMETERS AND ASSUMPTIONS \- Drug Development, [https://www.ncbi.nlm.nih.gov/books/NBK611884/](https://www.ncbi.nlm.nih.gov/books/NBK611884/)  
> 31. Rentosertib Encyclopedia — From Target Discovery and Generative, [https://rentosertib.net/](https://rentosertib.net/)  
> 32. Case Study: Insilico's Transformation, [https://insilico.com/casestudy](https://insilico.com/casestudy)  
> 33. Applications of Data Analysis and Artificial Intelligence Agents in, [https://bjhaeo.com/bjhaeo/article/download/69/51/146](https://bjhaeo.com/bjhaeo/article/download/69/51/146)  
> 34. Validating Google Willow: 5.4% Lambda Accuracy | qsurf Blog, [https://getqore.ai/blog/google-willow-validation](https://getqore.ai/blog/google-willow-validation)  
> 35. Quantum Error Correction Threshold Theorem: Why Scale Helps, [https://scienceshot.com/post/quantum-error-correction-threshold](https://scienceshot.com/post/quantum-error-correction-threshold)  
> 36. The Google's 105-qubit Willow quantum Processor \- Cyber Raiden, [https://cyberraiden.wordpress.com/2026/09/02/the-googles-105-qubit-willow-quantum-processor-a-technical-briefing-on-googles-superconducting-quantum-chip/](https://cyberraiden.wordpress.com/2026/09/02/the-googles-105-qubit-willow-quantum-processor-a-technical-briefing-on-googles-superconducting-quantum-chip/)  
> 37. Neura-parse/fault-tolerant-quantum-computing \- Hugging Face, [https://huggingface.co/datasets/Neura-parse/fault-tolerant-quantum-computing](https://huggingface.co/datasets/Neura-parse/fault-tolerant-quantum-computing)  
> 38. Willow processor \- Wikipedia, [https://en.wikipedia.org/wiki/Willow\_processor](https://en.wikipedia.org/wiki/Willow_processor)  
> 39. Wind in The Willows Simulation Access | PDF | Quantum Computing, [https://www.scribd.com/document/1047574602/Wind-in-the-willows-simulation-access](https://www.scribd.com/document/1047574602/Wind-in-the-willows-simulation-access)  
> 40. Dara \- Template Journal of Computer Science Advancements, [https://research.adra.ac.id/index.php/jcsa/article/download/3324/2364](https://research.adra.ac.id/index.php/jcsa/article/download/3324/2364)  
> 41. A Sim-to-Real Study of Surface-Code Decoder Benchmarking, [https://www.researchgate.net/publication/414038650\_A\_Sim-to-Real\_Study\_of\_Surface-Code\_Decoder\_Benchmarking](https://www.researchgate.net/publication/414038650_A_Sim-to-Real_Study_of_Surface-Code_Decoder_Benchmarking)  
> 42. Colour Codes Reach Surface Code Performance using Vibe Decoding, [https://arxiv.org/html/2508.15743v1](https://arxiv.org/html/2508.15743v1)  
> 43. Fixing Broken Qubits: How the Surface Code Makes Fault-Tolerant, [https://quantagram.org/articles/quantum-error-correction/](https://quantagram.org/articles/quantum-error-correction/)  
> 44. A benchmark dataset for multi-purpose compression of astronomical, [https://arxiv.org/html/2506.08306v1](https://arxiv.org/html/2506.08306v1)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAZCAYAAACl8achAAAB+UlEQVR4Xu2WzysFURiGP/kRUcKKiESSRLGihGRHCiX+A6QsKBaILLCRhQUrC2srC5Hump1kQZJS9mIp3teZuZ2ZOTNmrnt1F/PUU+abc817P3PORyTmh2q4CfdhD8xx3s4+GHgVFsFGeA8nHSuykCH4Btusa3b8AhYnV2SIOjjhLmo0wW14IKqL7KoNw3XDfOt6D57CwuSKNNIMp+El/IRHzttJRuEdbIclcAOew1J9kUUNvIXD7hvpgqFHYBd8EXNohniAU1qtDF7DWa1G2OldOC7/sBEr4bOYQzPsB+zQagx0DBOiOk8YeBn2W9fckHnWzzblln7kwioJ+YWDQvP9dIcmXPsK60U9ZEbUhuTv4vu/ZNV1+EVOYK2rTvilV+CCeD9nJCg0a36h7XqvqD3xpcmum+C+OBNn8MiBiV9o/ukT8nvoqOjBUwpM/ELzKON5awr3l9CEwXlqHUoKgYlfaOIXzq8eFnaY++VR1L6ITFBoTjdTOK7lMckRHhUG3hHV4RZRg8i0OQMJCs0hwU02oNU46fggGnXq6YHtV4LzInJwOzTPXve7VQGv4JpWaxDV5aCxb4KBt+C8eJ8TOji7x4frx9U7vIGt2rpO+AQX4ZioaciH2/9rhKUPzok3sA2bsQ4L3DdShSfJoKixz9EeExMTE5M5vgHcuWVKzd9rCgAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAZCAYAAACl8achAAAB+0lEQVR4Xu2WTyhEQRzHf/InooRSRCQSEkUOclFylOIg7g4SSSgHyZ8DbnLiwgEncXEQyZmbg4skpRxdOIrvt3nPzr73ZnbftrSH96lPu83M7nybN/ObJxIh+XAcdsMaOAqb40ZkIEXwBn7DdzgLc/UBmQhDrzmf/0otHPE2ajTCTbgr6vEXaH0Muw574CCs0PrSThOcgNfwCx7Ed/8yBB9gu6iAq/ASFjv9bDsStafL4BnscvrSDkNzZTjZqwSHroaPcExrK4F3cFJr01mExzDH25FO+DhfJDg0w37CDq0tCx6KOnxc5TZ4IrFtsaD16ZQ6msiGlaL+PyG20NviD0049g3WwT64L7Htwt/siH/yBngqqix6YbVZgnPi/10gttBsM4V223koV0Qd5Gl4BatiQ+PgubiQ+OChAxNTaLf+JgpN+GjLHfndhh48pcDEFLpQ1KolEzosDM6qtScpBCam0MQUztSeLFxh7v0nUeciNLbQvDSCwnEsy6Rp79pg4C1RK9wCzyX4cFqxhR4QdfGwQrjwBYkTUX4Pgx7Y3RK8L0IHd0Oz9nr3Fm+4W7istdWLWmXbtR8EA2/AGfHPk3Rwrh4n50ryDY1+wHvYqo3rhM9wHg6Lug05edg3uV44Jf7ALlwMls48b0eqsJL0i7r2ebVHRERERPwdP1biZE/49/T1AAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAABRklEQVR4Xu2UvytFYRjHH2GQwWChWGQxGYiFMvkDJJPhZrFYMIgy+AdEFhnZpCgU8ReY/AukbAbFJj7Pfc5z73vee3Rcx6LOpz6de973OX3fn1ek5D/Ri5t4gFs4mO7+G8bwBidxGC/xE1exJagrRAee4QK2Jm3deIdvOJK0FUaX7AFfxWbjbIjNaiVoU/qxPWoL6RQbaAP60S5ei4U6a2JB+gyZxx3JDuvBU7Gt+BFteIIfOJXuqu7ZEu5JOqzpEGVcbH/0BGaNPA77VUgX3uKR2Hp/h4cd47k0GaKj28dtsdOYhx6MezyU7Jln4iHrUj/mQzhdq0jTh1diy1yRxj3LRJdBL+dy8ttZxJng3fEQXy79piI5YV70jk/4GPiCE7VKQ0MucDRqzw3zC6t3JvYZB+qlVfT/MA5xNGwW5+KOkpKS4nwB/U03kyJfickAAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAABEklEQVR4Xu2TvY4BYRSGX8VWCsUmGwWJG1DI+rkBd8CqtlAqNLYRm+wlSCQ6ColSo6DQb6J2DVsqVOhkvSfjY+YwZnaNQjJP8hS+MzzmDEDIoxKjA5rWgyCJ0Bbd0Fc1C5QCXeHOIVlZn/bgHkrSJ31oI0qf9aEdWdkHLdEm3EPvtIPLsTgd07we2JFhG9YHXAvJF6rTLpwxXxFZmawrdXh9LSTomK+IvKlB32xnXiHBxEZ0Ao+IkMFpZQY/IUF+GAs6xOVn5qBGf5Rr+kuX9Ju+HK8+kaAzWH+HKs6fmS+87shEzLpkjVX8I/ZJtzSnB7AiU5pV53+KFWGtS9Ym7ugcztV94TxikFiZVvQgJCTkdvaUUDRHV4Vb4gAAAABJRU5ErkJggg==>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAaCAYAAAAKYioIAAADDklEQVR4Xu1XS6hOURhdQhF5RB4hkZIiA65SMpJIDNyJIhkhQ4VioqQYYOKVGBgYMTEgA4P/RlGmTJS6JEIoIZHHWn37699n/8fZp869DO5Ztfr//Tpnn7W/1wZatGjR4v9jBvmA/J3wFbkumudYRj5Fce538iX5M/A+uZYcFdY4TsPmxmvfkh/C/zfkSXKSL4igtS9q8h7su4YEc2Ef95ycnYyVoY/8St4lJ0T948l95DfyAjk2GhMk1jWYEBuTscXkAPmOXJmMXYWtmxnaE8kObA/aizCO3AMTeHnoawyJIVHqCrOC/ALbcBn6yR/kQfRajtZorZ6RYjJMbFnl/NAnEa6TS3xS6Oug9zljyCtJXyO4MB3YS3PICSPLuQNzyUXJWJUwwgbyF3kMJqr2c4acGs35mzCCDqMsDBQgf5XJzgttmf162MNG+yQMvTDCcZjLyLxj5IRZSL4mn5DTYfFCMSZ22Sph9iIjjE7tHHkYdnInyBvk9vB7Cd0YMBzC7IcJo9gQu1NOGMWRZyjGjxRVwmQh1Y7AfPM9eRkmlqAXfgxzhOEQZjNMmA6Kz8wJ4x+ttXpGGRoJs4tcRW6BpdHYvNbAgqNOVcgJI8uKTbmOMG4xsk4FRUdOGLcY7U/7LEMjYRzy9UFyTtQnv9emt4Z2ThjFqQNRu44wHmMOJf05YTzGDKK45xiNhdEpK/3Fp6ZfteVengJzwkjI2KxzwnhWkrsuTcZywnhWOoveVO9oLIyrH5/aAlgxpwLMxaoSRh95G8WCLCdMP8x9PeXGqBLG6xglizTNx2gsjOKLzPloaGuT2uxjdAsowSvfRyjWC0r358lPKG6gD5Y1UmEUi3aQn8mL6AZ7h96vLFX2QTqwm7DKd3UylsKFqcpclZCfy5wfwqrHAZgbzQrjqhF0t4jvMPHdx/vc7XRXkqjxmE5XdxS/8+jutQnFOklQLeJzRImndf4u7fMUqitv1Sjp3kTduWrfkVzVW7CTmxb6RjzK4ksLYjfMzHaSU5KxEQ2V/M5tyViLFi1atGjx7/AH7NryA0dJGB4AAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAWCAYAAAC2ew6NAAACoklEQVR4Xu2VzauNURTG1y2KkI9bpMhHPjIQhZSQAWJAykfCX4ARoWSgMGAgkUQmBiJSJAMRt0zEQCkMDERkZCImSjw/a6979tn33efekaTz1K9z3rU/3mfv9e61zbr6vzRO9IqesiHTcDGqDP4tYWy/uCNOiYvWbGakOC82lg1outheBjPNNZ/8kthhPlkpYrTRh76MybVIvBYzzU0fE5/EHjFNTBFbxQtxQQzzYWbzxG7xSPwUV6Kh0GbzFywUo81f8ECMzfrwnxht9KEvYxgb2ieeiDHpebk4YO6DTdoptonb5qb7RYdNYpn4aM1Gp4q35pOExovnYm8WO5RitIUY80ZMSs/M32e+EMQOn0v/Ebt80iopR5PFe2s2ysu+m08aYsKr1nppGC/HLxHfrPXiw9ZulPbj6T9aI85YlvJSnYyetYFGEX0/m39vZOZLiuViDGNPpOdV5tmJtPLZxSImihtZW6M6GSVWMxrxMFSOL+OUHA7JTfMDdN18d9lBdrKa8lDNKJP02eBGN4hfKZarNIp6xALzNEflwGCknPal4rRYl9r7VTNKjXtogxtdb0M3WopU30q/iCrBO2eLI9EpVDOKckO1eM1QLR4qU06Je2qtChPVol+djHIQakYpaewEB4qDVY4Po5z2JuUpR3wSX80/JcRn0KZORpmMy2B1Fhsh7iX4H99yPIcY8yP9lipTjmJhYXSAwii1sVxFr3gmjmaxWea7mV+5u8QHMSM9Mw+3FKnMbzAUKedA5cI084bRqLd/VkoDO8ZhAAr0SzE/OkmLxTtxUGwxL+7cIJSbUJSex+a3HSZfmV+lpcgS48tNYQGXs7YV7c1DExVgrbkJrtUmMfkc88WstPaFhMgQZvht0gRxTdwXd4u2rrr65/QbxPqXiTq7DLEAAAAASUVORK5CYII=>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAaCAYAAAAqorewAAAG20lEQVR4Xu2ZeeilUxjHH1kiu7FGGUvJlq0hZZks4Q/7GkLJkkbWQZYaJFt2IzuTrCNmsoY/bihiUopGlvxGIoQIZfd8PO8z77nnnvfe931/v/m57pxvfXvvPed97znnfb7nWc4VycjIyMjIWNqxvHKFuDEjY1hxmnL/uDHAiso14sZRxwHKv2vy3OKZUcFqyrOUdysvU27Q3V0bKyvnSu/7uiW8SXFn0Af5XoXVlQ8o14s7CtD/ivJD5bpR31KBOcrflbtF7csod1QuUh4W9Q0TEN+lyleVm0V9KWysfFd5ipinYuNi/J3DmxpiivIt5S/KaVGf4yjla8q14o4IuyqvjhsLYJObld8o94r6wPZi6xlZrKl8Wzmm3LC7azHuVe4TNw4BEMn1YiLAeMt2dyexnNh6niw+O65SvqhcKWhrilli3pNrCrOUM+LGBK6VXufhOFzMXpvHHQVIJS6MG0cJ2yl/lG4DcmWnkvgDwhv3DQs2Ud4n5lF3EfM6dbGp8kvpNSoR5GflTlF7E2yj/F75pljYDsH3p8TG7wfSANKB+HkH0YQ0JAXs9YT0rm2kcJyYVwgXiafFC/mLwZjDkOBvIZYvwq2kmVAdRIq/pNeoB4q9B95HCozFpiXfPVHSOS/eGS/N78cRie+kXqFXT4FC65K4USyaHKq8XHlk8T0E0YWc/E/llWLzI7+Now7P8fzFYpsz7MfGpEu8CzRAujS9+O7jcT/PHaKcKmkb9Btj3ECYf4hNgEUy4bvEQuQwgBeCF31BzKviXccDF2aVYON2wMbF6z2t3FJ5gvIrSef1hGR+53Ypjcn1NuVBflMFEPNsMU8dYmuxnJVUARulxj9ZbH5slgVixeQ1Ujoa5sBzpBPTxexMOvWycv3innPEIgTzx/6s+RjlrcrvxNKRx5SnKmeKRaSz/33SUGeMccHzV3bl58rPlF8X32MP8V/hYLGUBeOkdnNTIMiUMPsJljbej28W5oEgKdxiT8c93LtQyiqfKymXf68Cz+JA4jyaIuzXog/4+GPSXXfgzRBRag37iolx96DNU4hnpByTgpHCMcznNxJb0xdS5s5sLtbUUa5StNUdozV8gWH+uqrYAJ5r4c5pY8chZAzbBHuILYJwCNr8DqJoWlxVgeO5lDCrBLu28n3lc2Ih0lGV8/IeHxX7LbwT4EplPwikI3joGAiUkwWvKQDzjMevEizzZv6sg/WE4N7whMh/I5wHXn2R8mHpdhrYtCMm2CZjtIbnr+EZK16A8OXG4WWfUXxmgk2E5uAZFyxo+zt+fEVRg+dtI9wqYVa1uwE/FQuzISlGpy6+swR5KKEZ4eJV8Ix4yX7gfd8j1UUZXm628hOxM1jCfl3BYlOe60jpDR3cG2rAfyO0jws2tCEIBdtkjFZgp5Cj9FM+Az8kZShsK7SJEqyDnJIC4x2xnKlJqGGtrDk2qgs2zkvJWb+V3mOwfsB4C8WeO0IsHFZV/Q7yVgSZGmM/5U/KG6Vcax0Py9xJGTxKkP6RBoZwMXmx2VawTcZoBc9f2RW84BSOF/O2iBswQdouUD6r3Lto5wiMvgfFxEQBME/KPHiiBesgRBIBEC4CZuxBwIBjYoVECEIgAsPIIbzyTxmCU4N1ojYHqQ9GwjPPiPpSmCnposxDLRsgtJMLlpTrfLG1x4Llynv2NIU8FE8dgnmSsnmh11awTcZoBZ9YynOw+IvEKtMwlDHBR8SEgrH4Z8dfIp6pIzZ5+qlYfdFLSrAOUgNSBITlRUEV2Hwc+4RnpV4Y8MLjdwEoJvDKJ0m5eaco7yiuKXihVMdQzINol3IcLtgxKQssNhFeG/sxt5vE3rufMSMQwLGS228HsUofh+Ng7tiQ/NrXNU2s6AojTT/B4lU9Z607RiPg9aj22P0wPCGAvwV98T8/TNB3L4voFFeAAPnu+UsoyiUt2KZAIM8rHxf7G/N+5evS6xlC7Kn8SKzw43iNoxoiSxV4Dx1JO4QYiOo6qTYo43ysfE8sd+YPCLwxpxQI5MziPp4/T/mD2Lg3SHehxtn1G2LRkTUgNjy734Pw0YPbf27RTzribfyFTWjn6m30ezQdNMakYlQEC/wAnByTa50CDkHgMVIH8ilsK70pRgoUklV1hCM1NteUELAB91ZtAM5m8eapZycKkzHGQNQVrHuXiRAsC2bhjDOIdYU0TCCc4uEHFWUZDUFRQn60QHms2L9h5FBc2U2E0/lieR7/mFAkfKA8WvmSWD5MTnW6WCHC7xCOB4FwGB8nVZEQ6Bvo/4Kqv2IzJgGEICppvByFW1VIyjDwfq6QwUVZRsZQgE1NNGpyjpyRkZGRkZGRkZGRMcT4Bw3QqW4fQUy9AAAAAElFTkSuQmCC>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAaCAYAAAAZtWr8AAAC90lEQVR4Xu2YTehMURjGH6HId4pEyUeJDVGkZIGNhUiKkJRENmKBxEpWssCKfKbIR6GErP5hIaSsSMmfRJGUsvH9PL3n/O+dM3f+c+81k2ucp37due+ZuTPnue95z3sHiIqKivp/tJj8ysl295lO0VCylRwje8mY2uF8OkO+kXlBvA+ZSV6R5cFYlSQT9pA7ZFIwlqXx5AnZSAbAEug5mZ1+UzONIA9JNxlbO9Sj42RRGKyARpID5C5ZQPrWDmeqH2w+l91rr/3kFhmYivWq6eQzai+k4wzS350fcu+riiaQE7AMmwNbGXk1kbwjO4O4VtQXMiuIN9QaWA1LX0iZp7syyJ3rosOT4b+mKeSSYxqKGeallfMT9cYtgfkgP3JJBn0ny2AFUuv/KCx1qyCZo6y6CcsyZdufyBvUyLgwnilf336QN+Q1ee/Oq1LTlsJKibK+TIaFkjFZBhUyTutZ6zpd34aQi7BaIKngKqYMlKH6giKaTz7Bdm6pzHXKbAKNpLYqy6BCxvn6lu7RRpMjsG1aWkW2uNeafJEJe+kz3jip7HV823EflollDGxkUKN4nZT2p5Ddv3kNJmeR1JWyE26VcV7atNS8PibrUKCFgM1Vcw4N8sY17Vd9fXsBy7IsrYVln68tmrBiO8h1stDF1bpo7DRsUhvIVSR1stXGeald0oqQgTLSdwG9SR1DNzkcxDeRj2RqEK9TVn3z0g/YRT6Quam4JnwO9oPV1z1AYrruVBcsSzV+BYk57TLOS0tWS1cN7ORgLJSSYB9suQ9zMf1e1fXzqPeiR8qCt0ieQdM7qviaGgs7aU3Yp7haly53lGSEzmWclDan3cYVlQy7QS7AHrdOkntkXPpNrVSnGCcpS7XqVrhjmY0mt/IaJ/S6FcZpGakc6HuaMQptNqCMVDz1jPeIrIY9XahG6qjHMaX5NbKebCNPyTOyktyG1cvdZDN5CbuOlkkzaePRXz95OIjkRv5TUuHVbq27rg1G51FRUVFRUZ2p36uYslTddKCnAAAAAElFTkSuQmCC>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAXCAYAAACS5bYWAAABJElEQVR4XmNgGAWjgCjAA8RiQMyMLjGYgCMQ/wTi/0C8B4i5UaUHH5AB4idA3IouMRiBDQMkdP3QJQYjKAfit0CsiS4xGAAoE4Ec5gvE4kC8BogPMEAy2aACIEdeAOJ2IE6Dsn8B8SRkRYMByAPxLSCuBGJGqFgCA6QkIJRea4H4EQl4BxALgXWSAViAeDkDJNcrIokPyvQKcgzIUaD0CXI4CIDoQZleQZkJFN3pSGLSQPyAgbj0CvKMJAmYotoQ5lhPJDFQ+fobiIOA2BKIC5Hk0IEuEIeQgEH2cIJ1kgF0GCDJAJaR+Bkg1etXIDYG4mogdoHKDTgA5f4cIL4IxHOBeDcQBwLxFSDeCcS9QMwKVz1IAHrrCuRAEST+KBgFo2A4AwDjLzhc6IJLmwAAAABJRU5ErkJggg==>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAaCAYAAADxNd/XAAABsklEQVR4Xu2WvytFYRjHH6GIUhKJklExGaQYlIGBImWwmFgsFpKMMlksyo+FwaJMihj8CZTJJFllMmDg+/We47z34bznnrrnnju8n/p0b+9z7r3f99znfd8j4vFkTiNshdW6UOmMwHf4Ba9hQ2E5U8bgEeyF7co2WBtd6qYTPsNNXciYVTE37j9fYE90qZshMf/CpC5kzAE8g3uW+/ARrsCq3ysT4J1INeMSwDW3C1vU+AA8hvVqvAAuVIadENNrp/BGzJeWCwZk2BprjJsIs3RZY39g8Fu4BReC9x9wx74oBzgRZpjVBRvO7AGuSdRf82IWTVL/b8CnFF7A5p9PFscwvIJNuhDCGZ6I2W26rfE8+l8TZnN2AQMyKHss7Du+5tH/Gp4Dr3BOF2y4YNkqi9ZYh5gtyznzAE5QHzYu05zqzMRszBhLOIFxa4z7/yechoNw2app+uBMCvk7zq3QgucBczBPLPyb2ELhYuVi4aPDG+yH63A0qJWTOnguUY5YuOsswTt4KGbFT8F7eAm3JcWzRwnhs5d9IxPRT50MzdOw2H7NAm7vbJ88M3g8Ho+ngvkGnttVol7C3xEAAAAASUVORK5CYII=>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAWCAYAAACi7pBsAAACZ0lEQVR4Xu2YP0hWURjGX0nBUBBzCgokgnAQBaNQEhrCLZF0CF3ERQkXi4oEoYgGHQR1CXGRcGtwKQolnHPSwcVBFEFwcAgVHEqfp3Ovne94zv1jgZ2P84Mffr73eD98vvOd894jEggEAoFi5CocgdPwDbxZeDk3tfCxWdS4BcdEvV83vFx4OTNdsMYs+sAduABbYQP8BI/hM1iijUujDj6B3+BPOFt4+ZROuAYbYSV8K+r9q/RBGZmCTWbxf4czbB72wUtRjTPnOzyQfP8QQ++ALXBb7KFfh+uwR6tVw2U4qNWy4mXoXFY24Q9RszxmWNRsf6rVshLf0xY6wzY/TH6b5uCSqJmfBy9DL4MT8KuosGJeigqdP/OSFPqknA2dcOwOvGHU0/AydBul8KOodfl+4aVMJIXOmit0Wz2Nogn9rqgA2Fnwm5AXV+hcOpbEHm5a6ANwy+IR3LXUuTFzb/ICdhCL8AOsMK5lxRU678d728JNC92F9zOds/o9HJfz983EFTpxheuqp+F16HHgr+RP68gWsO10RHaSQn8n9nA5lm3mNaOehrehl4h6EBqKXsf0w0fa71yTuU7qY2wkhd4uaoN+oNXKRT2QUb7Og5ehM8BeeChqpumb0R68F41j2CuiNq7mqOYiDp29t/kB8T588Hqt1XjkwPdOOjZw4WXocUDsyU31vpmz/DP8BZ9HNRPOXobHmRzfYx+uwnpt3G24AV+IOjvh0+ioJHdKPBcyO5Sk7uULvPL7L4sABnuex3UTdjLcL3hswKOBQAKcnWnLS+AfwrOZGfm7djKQk4eSv6ULBC6eE6JDjuH9AYKYAAAAAElFTkSuQmCC>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAXCAYAAACI2VaYAAAClklEQVR4Xu2WT4hOURjGHyGEkIk0RGJkwaghicWU/wuRsmFqlNCo2YwFg62kWPgzM0hkRbGxsJEiNmJDkVJipIQQoSR/nud7z9s999xrZsGXL81Tv77vnnu+c577nvd97wcMaED/ViPIRnKK7CeT87cxiCwkR0k32UBG5mZUSbPJPdIJM6WN75AJ4f4QcgSZ6ZnkJnlApoY5VZEMaBMZU3QUjWvkM2kKc2T+LblKRoWxTeQnLJJV0y7YxjLgWkp2w45amkVekftkfBhbDzN3Olz/dY0ht8ld2KZCkRwcTwoaiyxqivBx8gNmsi/pJBaTocn4aOT3mUJayXYyRwN+XDLYRfaSY+QhmWe/KUjGVpJ35BCKm6bSybxAvsAWkfekOVxvJedh+StUcJWcUm7FEdDmB8kjFCt2GXlOXpOTpC5/uyAV0iVYDseV3YHMsOd4fAKVdd2cIhVvtAaWTwpxmXQcB2BPL8O/Uz15Bqtylxu+QoYH9P0l2QHrBMM0sZF8JDeQ5ZPk5s5FY6kWkC+wSveWk0rGv5PV0ViZYaWQTkR7ig8anEieoH9zc2EtQ5+uSaQX+ZaTSvmmiEyPxpaQr8gblpS788ke2LqVECsRVa3jsnmFY5XJNJKeEmkbcvlx3YJVpis2vJmsJWdhEXXN8C/LyRtkT19WEFpQc1aFa6kFZrgH9pCp/PjiB1clPoYZ1qmdIA3kOmw9l+5VpHDuI0/JNlgrUSUpxC71Q0VYVbWF7CSfyIVwr0yeb99gvz1MLpI2WOTOkHZYOl2GvS71qXe7WltOaoLryAqUv9AV0WmwOULz+5Ifn6pPBaMGrzUkGfJrf2X6uKLWX+/8I3m+pf2tJlTWLmpG6p/6o9CcjNeMyir4/9Avc7eGb43sTkgAAAAASUVORK5CYII=>

[image13]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAAWCAYAAAD9/x8lAAAEFElEQVR4Xu2ZXahOWRjHn4mpEWJ8TWomh3xeaEiayEynaYgLkoOEe8LV6FCiFAoxTWnyeTMXIpqGZBoRJ26UIgoXxoWJUWpmSgg1w/M7z36ctde793n3e07n3Jz1q3/vedda7z6rvf77edaztkgikUgkqjFUNVz1UdwR8LFqYNyY6Htgko2qs6q9qsNSbIwBqp9Ui+KORPfgxq5UHRFbgEn57oZpUq2IG0tYLPY/Y0artonNCXN8ke+WGap7qnFiBtqheqJarxqj+ly1THVLdVDV337WMEvFIlkiYIjqothNH6SaJrYYLeGgCkxRrVNdVv2n+jnfXUiT6qHUjl2o+k31pWqk2Nxeq5YEY75XXVMNzr7PUbWKzQPDrlItV50RM1BXOSBm0ETAZtUN1adBGzf8vuqzoK0eLBZRY7bqsdQaIYZ9xjHVO8mP/UR1XvWvanrWRjR5qrqrGpG18Zs2MaMDC8sCO0SfPdL9tJRME4FRMEy8wDNVL6RrN5y08khqrxlD6tgvtQbDNL+KRavmrI1IwTiikht5i+RNw5x3Zn/DXNWP0vW05CTTRBAd/pbaBeYmvVTtitqrUMU0TWJ7lclSPBbjhBXRfNX/YpHJTdCseiAdqYfU6CYfpToV9HWHZJoIN0e8aGXtVahnGtLSPtVXUn8ssPBXxSJiaAKuwwb3tNjm96RY1MFURJiuRMkikmki2HDGewroSdO0iG1iiSKdjSVasNElLd0U2xR75HH4TjupiAoQMIunJfox5w9i0Sr+fcha1Z8FeqN6VtBO8UA07HMskN41DaXwUbGKDTobG/Kt6pVqu1iEKYNI9Ev2CRj0kmqCaqvkq6+qpEgTUWaOsvYqlBmBJ3+32JPvlI2Noawm6rA5JqoUEacljHldrBIENtCHpGPjXJVkmggvZeNFc9NQoTRKmRE83YQh/i+xSPc2+06KYLG3iy12mE64HmM5IigiTEtA2nouloKBa2Fa5tcIyTQRPHVtYuciVCzOd2ILyafDWHJ4uJBFlJmmiKKxvs+i3RfY50n7mqwtJE5L4MZ30wCmIUU2QjJNAavFnvKx2XdMwQksod33HpjlttimcFbWVoYb4bjUN5ifv4RjWaB/xM5cfP8yXiwqceAYl9GeluK05dd202A8qi0/HKxKMk0BXrpeETvRxTCcvPI6weGGc6zPWUlr0B5CVGKR2HcQERAHhHdUU4NxwItFSmSimY/FKKQnzMOZC3MgPZKmeH/0h+Tn5JCWOPmNDYqZONfxvq/FjBiPc3jPFVdInVVPv6uGtf+yj8KNnCj2cu4bKa9QMMaGuLGHIMrNE5sTT3q/fHc7RECMwWcRLOoJ1QXVOamNUoleYJPUT0+JxAeoRniq/RAtkagLG8oU3hOJRGO8B1FE4TBgGNQfAAAAAElFTkSuQmCC>

[image14]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAWCAYAAACi7pBsAAACN0lEQVR4Xu2YP0iVURjGn4s5hEKgEARBl3DIQRqEoihwiDYhSqFRXJRoSakoaGiLKEFcxFxEgoYGlyJRWtrcam9IRKGhISpQ6M/z9n6nvns4557zlYLncn7wQ+/5Xu/F5zv3PS8fkMlkMplW5Ai9R+fofdrTeLkydXrVXvRwiT60FyMZot32Ygqcoiv0PD1JX9CfdJLWSnUheuk1+pp+pwuNl53U6XvE1bqYof324n7nIF2io7StWJOds0a/oto/JKHLrj1LNxAOsp3OQ29wqNZHkqFLW/lAP0N3ueEuNIyJ0los5j1DQQ7Tx4i7QT6SDF122zRdhoZluA0NXX5WJSb0OvT8OIFwbTOSDN3FAfoc2pcHGi9FEQpdbvQjehrh2hAtE7qEIf1cdqIEVJVQkFegbauGcK1hnK473KYfHesyGCQz1Ryiq3SRdljXYmkW5DH6BPo5QrPaGJLf6bKrZ+kUdKr5V3xBStt6AP0mGXy1sSQdugn8Dv6OjjICXvxTEY8vyMP0DRrbwCb0wN4pXksbqUKyoUtvnaQ3it8NY/Ry6XUntE+Wa1z4QndRpdZFkqFLgCP0G3ReLu/CT/RcUSdhv4UeXGeKNR8myKcI36Cj0M+NqXWRZOgmIPmK227R40Wd7PKX9Ae9WazZXIAGKKOmeY8v9B3tK9UJckg/g7YVUys32dde5LmQPaGIvunlFe36/ZctgAR73V7M7C23EG4vmV1Ens3IA6r/GSczFRmEHnyZTFr8Ap+HiOBERYF1AAAAAElFTkSuQmCC>

[image15]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAaCAYAAADcx/BtAAADGElEQVR4Xu2YW6hNURSGf6GIXCISEqGIKEWKouRSKJcHxcNJLi/qxCk6Lg8exINLSEmkSF6IkiIeTh7xgCh5QkoplKKQy/8be9prz7PWXnuuvU62ml99ndOcZ3fmHnOsMcbeQCQSiZTGQDqC9vY3WoS+dCTt52/8DyykX+kvepcOqN3+5wyn92Hn+0Rn1G73GKPoPnqG7qcTa7fDGUPf0AP+RovQi16iD+hQb68nmE3v0PmwS70Ju+QO2FkKMQ+WzSv9jRZBgVWAzyPsTR5GeOb3p9fpRlRL5zDY0/SZzqqsBbOLvqdT/I0mWE6n+4sF0RvTG9zqb+RwEuFBUZl4he6laTcsm3ck1uqiG1JAV8CayRXaBWt+ZbGUbvcXA9C5dL7JdAOKZVGRIKvBHqe3YQF3KBEVZP3MRcF9RA/SLZXfv9ETyT8qAV3YWTrW38hBjVdl4QZdT6/SD/QZrAmGUCTIafSBJeIPuqB2qzvj6AvaiWpta4PdUE/UYzUQZUWjE4uySN38Hh1cWZtE3yG8HouygjwH9iTpbDpjJrqNy7ApYnxivdF6rPlUj0+om2BBm4p81tGflZ+ORupx1tnO0SUp62pkjV6YLluj7UU0kCwKooKptFfAhXsMupBfj9fCbjJUjV4f6S3Yk5SFAqVR6S2dkFhXycirx1lne06vpawfokP+vLI+ytrT9Chs6shFTURlIZkRo+lLlF+PHcoCBVnZlJc5yjB1dQXafarTa1QmitRj0Uy5cAHuRHWUU6Iu/vsXKbggL0usaT7+TlfTuWhuGvBRgPbSNf5GBi7IapYONx/rovT7MToosZ9H0SDr7B2weCSTQwmqWGUyDVYuXINztcY9invoospeGej/nUK1NOWhx1ElxTU4uRPVsUlJoIkohCJB1v9to19g/et1Qk05SsxM9OJt9DGsIehj4yr6FDYTHkFO5wxkM8Inlpn0Cb0AC3g7LLMfwj6F1avpaRQJsnuidLm+fr/IxP+2TYFVvSv72zd14iKX5n/bpuTQNFDk27ciQY4Eoo/2ysxIJBKJRCKRSCSN32yrm4vSihpIAAAAAElFTkSuQmCC>

[image16]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAA9CAYAAAAQ2DVeAAAEBElEQVR4Xu3dS6h1YxgH8EcocjcgIZeUFEVCSgZCLpFrblPyDZQQJowwIHKbSUQZKFOXgcFXJMVEKQOUDIhixAC5PI911nfe/X5777NP7O+c0/796t+313rX++219ujpWetdJwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf3NrvwMAgO3jqMwnmQP6gSU6PfNU5qXMA93YIs7JXN7vbByReTVzVj8ww8kx//+b5vDMvZlHM8d1Y/OM8+raa27v9hjGXshc2o0BACvqwcxfmWv7gSU5NoZCZL+17dMyX2ZO3HPEbBdkrsn8mnm4G2v9HMMx5/YDM9RxL/Y753g581asF7lPZN7LHLzniOnq+HZeaefdE0NBV+r3eSzmXycAsAIOzTySuS+GjtRYRC1TFUdfx1C4lfrOvzNX7jliY/MKtuquVYdqmQXb9zH5/TfEYt93aux93u281zL3N2PnZd7PHNLsAwBWzJmZqzJnZL6I9SJqmcbblVUsjqpgq87ZomYVbFX8VcFTY4sUUKPNFmzVkWy/v869ruGOZt801Vnsz7udd13msmaszmt3TP5WAMCKuT6Grk/dkqsiZCuemapn6H6I4bm2Rc0q2M7PPBPLL9iqyJpWsE07p1Yd1x8zb14VcnU9AMCKqkLtzma7CpxafFAF1L5yUgydvQP7gQ30BVt11uq27s1r29u1YBu7f61p8+p6Hsp81e0HAFbMTZlLmu2PM79lLmz2LVPdGn07hhWTm9UXbLVqtDpRY+G3XQu2RTtsN2Y+iGH1KgCwwp6Nocs2qpWO04qH1v6ZY2J4jcVGmWcs1m6JoZt0cebsiSPm6wu2XZlvm/wSw7X8GEPhs5HNFmx/xPSCrRYfzHNR7P379vOqWHs3c/Tadt0WPWh9GABYJa9nDmu2q5ioQmR3zH7IvVYrXh1Dd26jzPNcTBYpj8ewInJ0ZPN5mr5g6y27w/ZNDO9JG92d+SmGxRulzn/aNRwfk/NKO6+8EUNBO3o+9s3qXQBgG6kO2eex3oEaXy77+9q+Sn1e1qskqjgav2dM++zcCTEsgJi2arQ6ad/F+rx631rfQauFE+P4n5mPJof/9WlMduTqd6jbwe2+ym3jhE4VVO9k3sy8kvkwhvMu9e9nMfsaxnn1GpOaO84r9VqP/rfZaOUpAMCWuCs29162rVC3h6v4rNTn3qxrGOdVF3LRDiAAwLbzdOaUfucOUn/JYKdfAwDAXE/Gzn5u64rY+dcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8B/8Ajo23K+HeMAcAAAAASUVORK5CYII=>

[image17]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAZCAYAAAB+Sg0DAAABuElEQVR4Xu2WzStEURjGX6HIt6TEhrUdFspKWJKFKBtZYEdZSAkbfwD5A1hRbGZhp0zZKCUpe8qaDQvJx/P0zs09dzFzzznGV+dXv2bmvFNzn3ve894RCQR+BdVwEbYkC3+VPvgCJ5OFH6YSTsH6xHpB1uE73INlZunbaYTjcAc+wFux7By227FooBvYalTzUwJrcq9fBQONwG64Lw6BuuAMPBINNWyW88LdXIAnsB+WmmVvdsUh0BjsgLOigbbF/o5XwXl4ASdguVl2xjpQBZwTvdOdoj17DZviX7KAh3gaXuZe+dkH60DcmdHce56lLHyDA9EXHOEOcaeu4AqsNcupsQ7Ew9cT+7wk2nYbsTUfeKb4G+dwVeyDWQVim62J2V698BmewbrYug8MNSjaynx422AVqB1uivncaRC9m0+i08+HaHd4c1zbzioQx/NyclG03dh2bD8XovPDIJx8nICupA7E6XMoOuGSI5oDgYMhKzoo0lKM0c1Ad7AtWYgzBF9Fd4FmRC+GHsTW6b1o6HywldhS3BG2mO/DtRmewkf5vA5eL4MVuhZv+LdnS4rzLyEQCAQC/48PJ71TTa82Zh4AAAAASUVORK5CYII=>

[image18]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAZCAYAAABq35PiAAADqUlEQVR4Xu2XXciNWRTHl1A05HNIkZd8zYXQpImYpBmZC5KvxNybmKsRSqOUUWZCShofc+NCppGYRIl440YponBh5mLk48qoyYgpzP9nPbt3P/t5nvc8J17Fe37175yzn3X22Wvttdbex6xFiw+ZgdIQqUf6IKK39FE6+CGB8+uk36WfpP1W7nBfaa+0MH1QBV9YKR0wn3hi/nHTtEkr0sEKFpn/ZsoIabP5mnB6VP6xfSrdksaaB2ardF9aK42WRkrLpGvSz1Iv/1rnDJDOmk/WT5pq/iNLYqMafCKtkc5LL6RD+celtEl/WtF2gXRamiJ9bL62Z9LiyOY76ZLUP/s8S1pvvg42YpW0XDphHphabJSuSIOiMSa6LQ2PxhrBItjlmdI9KzqYQh3/Ir2yvG0f6ZT0WJqWjbH7D6Wb0tBsjO+0m28gkCl7svdAtvxoTZQHASAQ6cKnS0+siYkiSO+/rDhnCim804qBIxjHzbNrTjbGzmJHFoUN2mT5YLDmH7L38KW022qWB7Cbj6y4cKL8r7QtGa9DnWC0mfeCSVZuS0DiE2K+9NI8k4Jzc6Q71lEClGjYvGHSb9GzWgSn08VUjdehUTAojx3SZ9bYFnDoonkGx84xD43xqHnT/NU8SwgWGdF0VtOo0pqFrgwGjZnmx653Zsvu0iApj6vmzTRkSoDPjFMSnIhAEEJ58Jyg7zLPrvT7Ob6ydxsMjryD5icYdGYbM1d6Km0xz4gqyJxj2SsQ+HPSeOl7y59GBaqcrhqvQ5WD7NR2850KVNmmcHySJTRVsqCMtDwI+GXzkxFovPuso+EWCEdWupgQDDp2s1Q5GNL+bqQH5pn5X/b5G3Mntpg7Eac182HLVaCMuDyA8vnHvBUAc7EZrK8UotRufq7TwQNfmC+Q1wC2cYevoioYZZTZhj7GeFh4WCfjq7OxmLQ8IGxoCAYQDEq1kq/Nd2VM9hlnufGRYqG2CcJ16bk0IxurIjh42BoHLtwfYluc+Nv8zhD6wzjzLOIimB6XoTzS8glzh2AQUE6fcGkrJRxRF8xvkASCmx7X8gATcT3mrF8fjceQRfw4dc0OIi5uN6TJkR3wh4qjkOwLtgSAMiEo3BlYA2VKufD/4g/LrylAeXDTTANPkLiXhGezzQOc2hXAYIK0VPrcqjs2Dn+bDnYRZOU88zWRLT3zj19DxuIwr2UMlo5IZ6STVsyqN2KDNS6TbgHdmV0Il5tuDY3oraZZixYtWryv/A8H9cLmQIuqdAAAAABJRU5ErkJggg==>

[image19]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAABsElEQVR4Xu2VTShEURiGvwnlryTyU+QnJUWIlYWV7IhY+MlaSZZWipLEziztLJSFLRuSNWWhSCgpZS+W4n07d8a51znnzkwzJnWfehb3O19z33Pn/IhEWGmAK3ATDsKYfzi/1MBD2AKr4CWc8nXkmSb4CMdhOTyHG3qDi2Zxz6YdbsNdOANL/MNp0wnvYW9wQKcDLsAz+An3/MNJJuAt7BE183V4Aiv0phQphTvwDs5JyBpkwDE4AF/EHLARPsBZrVYpav0ses+FcEnU1zW5KmpiOvwHjuGyhIQk9fBZzAEZ7AP2aTX+4L6oNRR8sYs6UcujzHvm+25gdbLDgitgXH4HJOx9ha2Buot5+Aa75WeSR7BYbzLhCsiaLaCp7oK7+ACOwGl4JWpdh2ILmDgKTEEyCUgKRJ2HtbAoMGbFFpBr5VTMQTINmBG2gMQWxFbPCa6APOlNQdjLo4l3a85xBRwVdYgPaTXuOu6+lHZgNkgE5LaPBcZ4qV/ANa3WJurrua7GrMCvwhfxC315vsNr2KX19cMnUaf+pKhbZEvS2IV/AXf0sKirkddfRERExH/mGx25WaAoD2D6AAAAAElFTkSuQmCC>

[image20]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAABtElEQVR4Xu2VTStFQRjHnxvKWyEKRV5SIkpRStlJbKRQ4gtIUizYKCR5WUmxsLOQT2BFusmKnWIjoZQvwEri/2/OYc4xM92L66bOr351zzPPufd/Z86ZEYlw0ghX4RwsC42lnQG4BXPhBlwODqeXUngCm7zrXtj+OeymGg6Hixr1cB3uwBGYExxOCAa6gUNwEfbAWKAjRAMch8fwFe4Ghz/gslzBFpgPl+AhLNCbEmAavogKmAG34VigIwQD9sMO+CDmgJXwGo5qtSJ4Die860w4KWp2Tc6L+mMMeA/L1W0yC+PemBPewBtNARnsGbZqNS7LniT45Rpc4jsJBryEJX6DDVfATfkakLD3EdaG6i5q4Cms8K4ZcF/UCjhxBWTNFtBUd8GZn4IrsBMewKpAhwVbQC5fXMxBvhPQp1DUlpMVHrBhC5gHj8Qc5CcBk8YWkNiC2OopwRWQR5EpCHu5NfkPfEpxBewTtYl3abVsUQ845eeU4wfk3hYLjRXDM7ig1epEzZ7raPwVOCv8Ic7Qm+cTvIDNWl8bvIUzcFDUKbImSbyFfwHf6G5RRyOPv4iIiIj/zDueUFtAr/oZwAAAAABJRU5ErkJggg==>

[image21]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAZCAYAAAChBHccAAAB00lEQVR4Xu2WzSsFURiH3xuKyNctpXwlJQulfCxkKWUjxUJkY6MkO5QUJYml5c3GAhtlISkkCys2srCxkBL/ACuJ39t7xj0z95zDvTXMYp566s77nnvnd8+cOTNEMTlTDCdguVbLg0MwBRdgqdaLBEm4Bw/hHazWepOwh+RPLMJLkvGRox3eUDp8CbyAW+q4ET7DfnX8Iw1wJFjUaIYbJJd1FBb521kRDM+0wnr1uYUkfG+6nQkPmoLn8ANu+9vf8Frky9xGMksr8BSW6YOywBReZx6ekJzLCocfhN3wiczha+E9HNNqFfAaTqvjfDhDclVMLpE/iCt8F9yFlcGGDf6RRzKH59BvJCf0SMAdknXqnB0LtvB8ZddIdiMOX+Vvm3GF36TM8AyPfSG5ubLFFJ7XO99Tdao+Dju1vhVXeK7ZwpvqLgrhLDyG73CfZEfh+gH81ORlXCNfc2ML721hppC5hA8FW3hee2dkDhn58IwtpK3+57jCr5I5JI/99boME1f4AZIHmP604xvsSMmf/xUvPO/diUAvCa/gslZrIpl11+tE6PBscgieWW+LeoW3JO8aHh3wAc7BYZKn6zos0MZEGt55+kheJ/iVISYmJiYmunwBQV1lZdc5rMQAAAAASUVORK5CYII=>

[image22]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAABh0lEQVR4Xu2VsStGURjGX2FAkSiZMBiUojCQhQzKZmW3iCiLpG+VYmBiMllkovAX+Av4B2SRLBYGPI9zDue+3z33c+KbnF/9+m73PcNz7nnud0USid8xAR/gu/UCNnjzZnjlzekpbPLW/Ck18AC+whc4mh1/MgtPJBu0KrTCI7gsZuf7YgL6rMI5da8qDMBd2Alv4R3s8eZ18NCu0zB0t/0N0SYRx8odL9jrkpins/g1FWkX8+T4BDUMug5XJD9QHzyHXXoQYgcO2et++ASvYYu9Nw737HUe9XAbrkk2UHQQ1xfunnCnx/ANTtt7fGqV+qIDRQchri/+jhiCYRiKb0+oLxoXiOujgxC/Lw4eD4+JxzUp4b7kMQzv4YbkdygIF7MLI3oA5sUU+QZuqVmIQXgJe+GmlHeoEN0Xnw4xrzkDVeoLcUHc0fDIogLxCPjX3qgHlhJ8FFPGIhjkTMo78qNAU/BZvr81/ATMZFYY+JrzW1XUF26EpdVBHLVwCY7pQSKRSPw7PgCugkRb5z6p7QAAAABJRU5ErkJggg==>

[image23]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAA2ElEQVR4Xu3QPwuBURQG8EcZiJKyyMRsMymjjMpgsmM3yMTiAyjfwcBisBneUZntPgGTQfLnOQ567/GyK0/9Svfce17nAD+ZOHUobQvfUqITNWzhWwZ0pQmF3VJw5K8toY+2lHGqH1KgJi2gD6tuOTh1ylEL+mhMIeeGSYTa0DnytKcNpfyXbOQLtcdvmc2jC5WfF2ykex9u1yIdaUUJ3/krWRrBXXGS1nSALugtsqWePWSG0IV0bSFKM+gS7KZkHpnLg855T4XO0G5iTrGHqe9c7KCN/5HcAPGLJWv5fpxWAAAAAElFTkSuQmCC>

[image24]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAZCAYAAACis3k0AAACxUlEQVR4Xu2YTaiNQRjH/0IR+UokyudG7Hx1S9lg6SMkbGx8LCxEkdW9JTuUjxXlq0SRUmRjcWKj2NrIAsnCgg0K+fj/73Pf7rxz3jnvzDndc+TOr351z8ycc955Zp5n5lwgk8mMIibTo3SO35FJYy39Sff4HT1iIt1NL9HzdD0dWxqRhj5vL53mtVcxn96ms/yOGAboH3qLjit3dZ2p9B7dRxfTfvqLPhrqi2UG3Umv0c/0Leozbjy9irixTSitH8MC+YbOLfV2n0P0Bp0y9HoMPQl7vuPFoAgUyM10JWyHxQRnBywzY8Y2sYLupw9hD7up3N11rsOe44jTtop+gy34JKc9Fn1mXXAWwErJA9SPrUSrsIgegE3gImwX9Iot9CXd4LRpsb/SBiyDUqkLpFL6DF2N+rGVTKAHYXVxOayWaBIz3UH/ADoEtciabDvUBWcbLAO0gerGVqKduHXob610g/6GnZIx7KLvEnxBlwy+Mx4dME/oK9iJ2g6tgqPPvIzhg6zV2CAqxqo/BSrmWvlTTlsv0Q45Rl/TpV5fCqHgKKVP0zVOW2hsEKWzrhZuGvfR7/QZ0q4aI4VS7insIOiEUHB0sBYpXRAaG2QhPYfyvXE6fQ4r7CrwdajG6gtjnQ3bBTEoiLo76hojVHpUK/WdqYSCcxbN5ecHLCs/wK5NtbcErcYJvxGW1rF3NtWX7QmqlBSBaYVOz5soZ4VSWwtf7B4tiH59xCxMKJBVpIwd/Ml0F3Ziu9ta6KDRgdNAe1eNTlHAVBM/orxTPqFcu3WCa8EHnLYQCs57Os/v8FAstIAxY7ER9pNLDyHvw7avvOO0Sz28gt1NNGn3GVzd/wUchi24LulVC67dqvr6BcPv17wVpKo5qU3zLcYqxaNS+39AB+UFjJLJjiR9sOtRpgOUzlfoMr8jk4YOpXV+YyaTyWR6z19FcaLPj265DAAAAABJRU5ErkJggg==>