import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import styles from "@/styles/section-css/outsourcing/Phases.module.css";

import horizontal from "./horizontal.json";
import vertical from "./vertical.json";

function Phases() {
  const content = useRef(null);
  const tabs = [
    {
      title: "Scoping & Planning",
      content: ` <p>
      Most companies go straight to selecting resources for a project, without taking the necessary steps to create a plan to adequately assess strategic fit. Without a good strategy, many risks that could derail the success of your projects are overlooked. 
    </p>
    <p>
    Therefore, during Phase 1, we will work with our clients' leadership and stakeholders to assess their organizational readiness, and focus on mitigating risk and establishing a plan. This will ensure that we set ourselves up for success from the very start.
    </p>
    <h4>Deliverables</h4>
    <ul>
      <li>
        Risk Assessment Report - includes mitigation plans to address
        potential risks
      </li>
      <li>
        Product Outsourcing Charter that establishes project
        definitions, success criteria and assesses the impact
      </li>
    </ul>`,
    },
    {
      title: "Partner Selection",
      content: ` <p>
      Most businesses take a casual approach when choosing a remote team, often relying on informal referrals which don't take into consideration different goals, team sizes, capabilities, technologies, time zones or budgets for different projects.
    </p>
    <p>
    As we have partnered with the best IT development companies in the region, with deeply vetted and highly skilled resources, we are able to handpick the best-fit teams for your projects, which are perfectly aligned to your individual needs.
    </p>
    <p>
    Since we handle the cumbersome task of selecting the best-fit talent on your behalf, both you and our partners benefit significantly from the time, effort and cost savings as a result of our more efficient approach to team selection.
    </p>
    <h4>Deliverables</h4>
    <ul>
      <li>
      Shortlist of handpicked team members - matched to your unique criteria
      </li>
      <li>
      Access to Accelerance Partner Showcases with data and video interviews with company leaders for your due diligence review
      </li>
      <li>
      Facilitated Interviews with the Partner(s) of your choice
      </li>
      <li>
      Contract and SLA negotiation assistance
      </li>
    </ul>`,
    },
    {
      title: "Project Initiation",
      content: ` <p>
      Many projects that rely on external resources fail due to unmet expectations, poor communication and escalating costs. During Phase 3, we dedicate ourselves to help our clients and partners avoid these risks by guiding them through the alignment and outsourcing management best practices.
    </p>
    <p>
    This could involve the facilitation of an alignment workshop for you and your handpicked team that helps us start the right way, by creating accountability and achieving early wins.
    </p>
    <h4>Deliverables</h4>
    <ul>
      <li>
      Roles and responsibilities
      </li>
      <li>
      Commonly used terms/glossary
      </li>
      <li>
      Communication protocols
      </li>
      <li>
      The detailed development activity schedule
      </li>
      <li>
      Key performance indicators
      </li>
      <li>
      Activity scheduling
      </li>
      <li>
      Coding and testing standards
      </li>
      <li>
      Product management practices
      </li>
    </ul>`,
    },
    {
      title: "Ongoing Management",
      content: ` <p>
      Without proper management, from start to finish, it is easy to for a partnership between customer and vendor to drift off course. Phase 4 is designed with our clients in mind, to ensure that all parties involved maintain focus, which helps prevent risks from being introduced.
    </p>
    <p>
    This would involve regular meetings with your distributed team where we would assess the current state of your engagement, discuss potential challenges and ensure all potential risks are flagged early. We follow an agile delivery method that allows our teams to quickly deliver in such a way that our clients have rapid access to their customized solutions.
    </p>
    <h4>Deliverables</h4>
    <ul>
      <li>
      Regular video calls with your newly formed team
      </li>
      <li>
      Status reports with findings and recommendations for improvement
      </li>
    </ul>`,
    },
  ];
  const [active, setActive] = useState(0);

  const handleActive = (index) => {
    content.current.style.opacity = "0";
    setTimeout(() => {
      setActive(index);
      content.current.style.opacity = "1";
    }, 300);
  };
  const handleAccordion = (index) => {
    setActive(index);
  };

  return (
    <div className={styles.Phases}>
      <div className="container">
        <h2 className={styles.title}>
          The Distributed Approach to the Project Lifecycle
        </h2>
        <Lottie
          loop
          animationData={horizontal}
          className={styles.horizontal}
        ></Lottie>
        <Lottie
          loop
          animationData={vertical}
          className={styles.vertical}
        ></Lottie>
      </div>

      {/* Tabs */}
      <div className="container">
        <p className={styles.tag}>Phases</p>
        <div className={styles.contentWrap}>
          <div className={styles.tabs}>
            {tabs &&
              tabs.map((tab, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleActive(index)}
                    className={`${styles.tab} ${
                      active === index ? styles.active : ""
                    }`}
                  >
                    <span className={styles.num}>0{index + 1}</span>
                    <h3>{tab.title}</h3>
                  </div>
                );
              })}
          </div>
          <div
            className={styles.content}
            ref={content}
            dangerouslySetInnerHTML={{ __html: tabs[active].content }}
          />
        </div>
        <div className={`${styles.contentAccordion} contentAccordion`}>
          {" "}
          {content &&
            tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleAccordion(index)}
                  className={`${styles.item} item ${
                    index === active ? styles.activeTab : ""
                  }`}
                >
                  <div className={styles.titleWrap}>
                    <div>
                      <span className={styles.num}>0{index + 1}</span>
                      <h3>{tab.title}</h3>
                    </div>
                    <Image
                      src="/arrow-black-down.svg"
                      width={19}
                      height={23}
                      alt="arrow icon"
                    />
                  </div>
                  <div
                    className={`${styles.content} content`}
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Phases;
