import React, { useState } from 'react';
import styles from './Style.module.css';
import { vaccineTypes, vaccineWork, vaccineType1, vaccineType2, vaccineType3 } from '../../Images';
import { Collapse } from 'react-bootstrap';

export function EnVaccine(props) {
    const [open, setOpen] = useState({ types: false, typesList: false })

    return (
        <div>
            <div className="card" style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto', marginTop: 30 }}>
                <div className="card-body">
                    <h2 className="card-title">About the different types of COVID-19 vaccines</h2>
                    <a onClick={() => { setOpen({ types: !open.types }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.types ? "Show more" : "Show less"}</a>
                    <Collapse in={open.types} className={styles.collapse}>
                        <div className={styles.container}>
                            <img src={vaccineTypes} className={styles.image} alt='Vaccine types' />
                            <div className={styles.containerLeft}>
                                <p>As of December 2020, there are over 200 vaccine candidates for COVID-19 being developed. Of these, at least 52 candidate vaccines are in human trials. There are several others currently in phase I/II, which will enter phase III in the coming months (for more information on the clinical trial phases, see part three of our Vaccine Explained series).</p>
                            </div>
                            <br />
                            <div className={styles.containerLeft}>
                                <h4>Why are there so many vaccines in development?</h4>
                                <p>Typically, many vaccine candidates will be evaluated before any are found to be both safe and effective. For example, of all the vaccines that are studied in the lab and laboratory animals, roughly 7 out of every 100 will be considered good enough to move into clinical trials in humans. Of the vaccines that do make it to clinical trials, just one in five is successful. Having lots of different vaccines in development increases the chances that there will be one or more successful vaccines that will be shown to be safe and efficacious for the intended prioritized populations.</p>
                            </div>
                            <br />
                            <div className={styles.containerLeft}>
                                <h4>The different types of vaccines</h4>
                                <p>There are three main approaches to designing a vaccine. Their differences lie in whether they use a <strong>whole</strong> virus or bacterium; just the <strong>parts</strong> of the germ that triggers the immune system; or just the <strong>genetic material</strong> that provides the instructions for making specific proteins and not the whole virus.</p>
                            </div>
                            <img src={vaccineWork} alt='Vaccin work' className={styles.image} />
                            <h3>The whole-microbe approach</h3>
                            <br />
                            <br />
                            <div className={styles.containerLeft}>
                                <h4>Inactivated vaccine </h4>
                                <p>The first way to make a vaccine is to take the disease-carrying virus or bacterium, or one very similar to it, and inactivate or kill it using chemicals, heat or radiation. This approach uses technology that’s been proven to work in people – this is the way the flu and polio vaccines are made – and vaccines can be manufactured on a reasonable scale.</p>
                                <br />
                                <p>However, it requires special laboratory facilities to grow the virus or bacterium safely, can have a relatively long production time, and will likely require two or three doses to be administered.</p>
                            </div>
                            <br />
                            <div className={styles.containerLeft}>
                                <h4>Live-attenuated vaccine</h4>
                                <p>A live-attenuated vaccine uses a living but weakened version of the virus or one that’s very similar. The measles, mumps and rubella (MMR) vaccine and the chickenpox and shingles vaccine are examples of this type of vaccine. This approach uses similar technology to the inactivated vaccine and can be manufactured at scale. However, vaccines like this may not be suitable for people with compromised immune systems.</p>
                            </div>
                            <br />
                            <div className={styles.containerLeft}>
                                <h4>Viral vector vaccine </h4>
                                <p>This type of vaccine uses a safe virus to deliver specific sub-parts – called proteins – of the germ of interest so that it can trigger an immune response without causing disease. To do this, the instructions for making particular parts of the pathogen of interest are inserted into a safe virus. The safe virus then serves as a platform or vector to deliver the protein into the body.  The protein triggers the immune response. The Ebola vaccine is a viral vector vaccine and this type can be developed rapidly.</p>
                            </div>
                            <br />
                            <div>
                                <h4 className={styles.containerLeft}>The subunit approach</h4>
                                <img src={vaccineType1} alt='Vaccine type 1' className={styles.image} />
                                <p className={styles.containerLeft}>A subunit vaccine is one that only uses the very specific parts (the subunits) of a virus or bacterium that the immune system needs to recognize. It doesn't contain the whole microbe or use a safe virus as a vector. The subunits may be proteins or sugars. Most of the vaccines on the childhood schedule are subunit vaccines, protecting people from diseases such as whooping cough, tetanus, diphtheria and meningococcal meningitis.</p>
                                <img src={vaccineType2} alt='Vaccine type 2' className={styles.image} />
                            </div>
                            <div>
                                <h4 className={styles.containerLeft}>The genetic approach (nucleic acid vaccine)</h4>
                                <p className={styles.containerLeft}>Unlike vaccine approaches that use either a weakened or dead whole microbe or parts of one, a nucleic acid vaccine just uses a section of genetic material that provides the instructions for specific proteins, not the whole microbe. DNA and RNA are the instructions our cells use to make proteins. In our cells, DNA is first turned into messenger RNA, which is then used as the blueprint to make specific proteins. </p>
                                <img src={vaccineType3} alt='Vaccine type 3' className={styles.image} />
                                <p className={styles.containerLeft}>A nucleic acid vaccine delivers a specific set of instructions to our cells, either as DNA or mRNA, for them to make the specific protein that we want our immune system to recognize and respond to. </p>
                                <br />
                                <p className={styles.containerLeft}>The nucleic acid approach is a new way of developing vaccines. Before the COVID-19 pandemic, none had yet been through the full approvals process for use in humans, though some DNA vaccines, including for particular cancers, were undergoing human trials. Because of the pandemic, research in this area has progressed very fast and some mRNA vaccines for COVID-19 are getting emergency use authorization, which means they can now be given to people beyond using them only in clinical trials. </p>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>

            <br />
            <br />

            <div className="card" style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto', marginTop: 30 }}>
                <div className="card-body">
                    <h2 className="card-title">List of Different vaccines</h2>
                    <a onClick={() => { setOpen({ typesList: !open.typesList }) }} style={{ borderRadius: 5, padding: 10 }} className="btn btn-primary">{!open.typesList ? "Show more" : "Show less"}</a>
                    <Collapse in={open.typesList} className={styles.collapse}>
                        <div className={styles.container}>
                            <table style={{ width: "100%" }} className={styles.table}>
                                <tr>
                                    <th className={styles.th}>Vaccine, developers/sponsors</th>
                                    <th className={styles.th}>Country of origin</th>
                                    <th className={styles.th}>Type (technology)</th>
                                    <th className={styles.th}>Doses, interval</th>
                                    <th className={styles.th}>Storege, temperature</th>
                                    <th className={styles.th}>Current phase (participants)</th>
                                    <th className={styles.th}>Authorization</th>
                                </tr>
                                <tr>
                                    <td className={styles.td}><a href='https://en.wikipedia.org/wiki/Pfizer%E2%80%93BioNTech_COVID-19_vaccine'>Pfizer–BioNTech COVID-19 vaccine</a><br /><br /><a href='https://biontech.de/'>BioNTech</a>, <a href='https://pfizer.com'>Pfizer</a></td>
                                    <td className={styles.td}>United States,<br /> Germany</td>
                                    <td className={styles.td}><a href='https://en.wikipedia.org/wiki/RNA_vaccine'>RNA</a> (<a href='https://en.wikipedia.org/wiki/ModRNA'>modRNA</a> in <a href='https://en.wikipedia.org/wiki/Lipid_nanoparticle'>lipid nanoparticles</a>)</td>
                                    <td className={styles.td}>2 doses 3–4 weeks</td>
                                    <td className={styles.td}>-70±10 °C</td>
                                    <td className={styles.td} style={{ fontSize: 13, fontWeight: 'unset' }}>Phase III (43,448)
                                    Randomized, placebo-controlled.
                                    Positive results from an interim analysis were announced on 18 November 2020 and published on 10 December 2020 reporting an overall efficacy of <b>95%</b>.<br />
                                    Jul 2020 – Nov 2020, Germany, United States</td>
                                    <td className={styles.td} style={{ fontSize: 10, fontWeight: 'unset' }}>
                                        <b>Emergency (35)</b>:
                                        Albania,
                                        Andorra,
                                        Argentina,
                                        Aruba,
                                        Bahrain,
                                        Canada,
                                        Caribbean,
                                        Chile,
                                        Colombia,
                                        Costa Rica,
                                        Ecuador,
                                        Hong Kong,
                                        Iraq,
                                        Israel,
                                        Jordan,
                                        Kuwait,
                                        Liechtenstein,
                                        Mexico,
                                        Monaco,
                                        New Zealand,
                                        North Macedonia,
                                        Oman,
                                        Panama,
                                        Philippines,
                                        Qatar,
                                        Saint Vincent and the Grenadines,
                                        Singapore,
                                        Suriname,
                                        Switzerland,
                                        UAE,
                                        Ukraine,
                                        United Kingdom,
                                        United States,
                                        Vatican City,
                                        World Health Organization (WHO),
                                        <br />
                                        <b>Full (12)</b>:
                                        Australia,
                                        Brazil,
                                        European Union,
                                        Faroe Islands,
                                        Greenland,
                                        Iceland,
                                        Japan,
                                        Malaysia,
                                        Norway,
                                        Saudi Arabi,
                                        Serbia,
                                        South Korea
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.td}><a href='https://en.wikipedia.org/wiki/Sputnik_V_COVID-19_vaccine'>Sputnik V COVID-19 vaccine</a>, <br /><a href='https://gamaleya.org/en/'>Gamaleya Research Institute of Epidemiology and Microbiology</a></td>
                                    <td className={styles.td}>Russia</td>
                                    <td className={styles.td}><a href='https://en.wikipedia.org/wiki/Adenoviridae'>Adenovirus</a> <a href='https://en.wikipedia.org/wiki/Viral_vector'>vector</a> (<a href='https://en.wikipedia.org/wiki/Recombinant_vaccine'>recombinant</a> <a href='https://en.wikipedia.org/wiki/Ad5'>Ad5</a> and <a href='https://en.wikipedia.org/wiki/Ad26'>Ad26</a>)</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>John</td>
                                    <td className={styles.td}>Doe</td>
                                    <td className={styles.td}>80</td>
                                </tr>
                            </table>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>

    )
}
