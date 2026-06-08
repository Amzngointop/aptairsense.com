export interface Guide {
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  image: string;
  heroImage: string;
  thumbnailImage: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; content: string }[];
  recommendations: { title: string; description: string; href: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const guides: Guide[] = [
  {
    slug: "what-is-carbon-monoxide-co-detectors",
    title: "What Is Carbon Monoxide? How CO Detectors Keep You Safe",
    tag: "Health & Safety",
    readTime: "8 min",
    image: "/guides/what-is-carbon-monoxide-co-detectors.jpg",
    heroImage: "/guides/what-is-carbon-monoxide-co-detectors.jpg",
    thumbnailImage: "/guides/what-is-carbon-monoxide-co-detectors-thumb.jpg",
    metaTitle: "What Is Carbon Monoxide? How CO Detectors Keep You Safe | AptAirSense",
    metaDescription:
      "Carbon monoxide kills over 400 people in the US each year. Learn how CO is produced, how detectors work, and where to place them in your apartment.",
    intro:
      "Carbon monoxide is an odorless, colorless gas produced by incomplete combustion — and it kills over 400 people in the US each year. Understanding how CO detectors work and where to place them is essential for every apartment.",
    sections: [
      {
        heading: "How Carbon Monoxide Is Produced",
        content:
          "Carbon monoxide forms when fuels — gas, oil, wood, charcoal — burn incompletely without enough oxygen. In apartments, the most common sources are gas stoves and ovens, gas furnaces and boilers, gas water heaters, portable generators, and attached parking garages where vehicle exhaust can migrate into living spaces.\n\nBecause CO has no smell, no color, and no taste, the human body cannot detect it through any natural sense. At low concentrations — around 70 ppm — CO causes headaches, fatigue, and nausea that are easily mistaken for a cold or flu. At higher concentrations (above 150 ppm), CO causes confusion, rapid heart rate, and loss of consciousness. At very high levels it is fatal within minutes.\n\nCO poisoning is particularly dangerous because symptoms resemble illness. Many victims attribute early warning signs to unrelated causes and delay evacuation. A functioning CO detector eliminates this ambiguity entirely — if the alarm sounds, the response is immediate and unambiguous.",
      },
      {
        heading: "How CO Detectors Work",
        content:
          "Modern residential CO detectors use electrochemical sensor technology. Inside the sensor, CO molecules react with an electrolyte solution, generating an electrical current proportional to the CO concentration in the air. This current is measured continuously, and when it exceeds a threshold corresponding to dangerous CO levels, the alarm triggers.\n\nAll UL 2034-certified CO detectors follow the same alarm threshold standard: they must alarm within 35 minutes at 70 ppm, within 15 minutes at 150 ppm, and within 4 minutes at 400 ppm. They must not alarm for 30 days at 30 ppm, which prevents nuisance alarms from trace CO that's harmlessly present in some environments.\n\nDigital display models show the current CO reading in parts per million (ppm), allowing you to monitor low-level CO exposure before it reaches alarm thresholds. This is particularly useful for identifying minor appliance issues — a water heater venting slightly — before they become emergencies.",
      },
      {
        heading: "Where to Place CO Detectors in Your Apartment",
        content:
          "CO is roughly the same density as air, which means it disperses throughout a space rather than settling low (like propane) or rising (like lighter gases). Detectors can be placed at any height — floor to ceiling — and will detect CO effectively.\n\nInstallation guidelines from the NFPA: place at least one CO detector on every level of your home; install one within 10 feet of each bedroom door so the alarm is audible while sleeping; keep detectors at least 5 feet from gas appliances, direct sunlight, and areas with high humidity (bathrooms, kitchens).\n\nFor a typical one-bedroom apartment, this means a minimum of two detectors: one in the main living area and one near the bedroom. If the apartment has a gas range, a kitchen-adjacent unit adds an extra layer of detection for slow appliance leaks. Replace CO detectors every 5–7 years, as electrochemical sensors degrade over time regardless of how well the unit appears to function.",
      },
    ],
    recommendations: [
      {
        title: "Best CO Detectors for Apartments",
        description:
          "Our full ranking of battery-powered, plug-in, and digital display CO detectors — reviewed by UL certification, sensor type, and reliability.",
        href: "/best/best-carbon-monoxide-detectors",
      },
      {
        title: "Best Smoke Detectors for Apartments",
        description:
          "Pair your CO detector with a reliable smoke alarm for complete fire and gas safety coverage in your apartment.",
        href: "/best/best-smoke-detectors-apartment",
      },
    ],
    faqs: [
      {
        q: "Do I need a CO detector if my apartment has no gas appliances?",
        a: "Yes. Even all-electric apartments can be exposed to CO from neighboring units, shared parking garages, building mechanical systems, and attached structures. CO can migrate through walls, floors, and HVAC systems. The Consumer Product Safety Commission recommends CO detectors for all homes regardless of fuel type.",
      },
      {
        q: "Can a CO detector replace a smoke detector?",
        a: "No. CO detectors and smoke detectors are different devices that detect different hazards. CO detectors do not detect smoke or fire. Smoke detectors do not detect carbon monoxide. Combination units carry dual certifications (UL 217 for smoke, UL 2034 for CO) and can replace separate devices, but only if both sensors are individually certified to their respective standards.",
      },
      {
        q: "How do I know when my CO detector needs to be replaced?",
        a: "Most CO detectors have a rated lifespan of 5–7 years from the manufacture date (printed on the back of the unit). Many models include an end-of-life chirp distinct from the low-battery chirp. Do not rely on a CO detector past its manufacturer-stated replacement date — the sensor degrades even if the alarm circuitry still functions.",
      },
    ],
    relatedSlugs: [
      "smoke-detector-types-ionization-photoelectric",
      "how-to-read-hygrometer-humidity-levels",
    ],
  },
  {
    slug: "how-to-choose-dehumidifier-apartment",
    title: "How to Choose the Right Dehumidifier for Your Apartment",
    tag: "Buying Guide",
    readTime: "9 min",
    image: "/guides/how-to-choose-dehumidifier-apartment.jpg",
    heroImage: "/guides/how-to-choose-dehumidifier-apartment.jpg",
    thumbnailImage: "/guides/how-to-choose-dehumidifier-apartment-thumb.jpg",
    metaTitle: "How to Choose the Right Dehumidifier for Your Apartment | AptAirSense",
    metaDescription:
      "High humidity causes mold and dust mites. Learn how to choose the right dehumidifier for your apartment based on room size, capacity, and key features.",
    intro:
      "High humidity causes mold, dust mites, and respiratory discomfort. Choosing the right dehumidifier depends on your room size, desired features, and whether you want a compact unit or a full-capacity model with a drain hose.",
    sections: [
      {
        heading: "Understanding Dehumidifier Capacity and Coverage Area",
        content:
          "Dehumidifier capacity is rated in pints of water removed per day under standard conditions. The AHAM (Association of Home Appliance Manufacturers) defines standard conditions as 65°F and 60% relative humidity — conditions that are less demanding than a damp basement or humid summer apartment. Real-world removal rates are often lower than rated capacity.\n\nCapacity guidelines for apartments: for spaces up to 300 sq ft with mild humidity issues (windows sometimes fog, air feels slightly damp), a small 20–25 oz tank unit is typically sufficient. For medium spaces of 500–1,000 sq ft with moderate humidity (visible condensation, musty odors), look for 20–35 pint per day capacity. For persistently damp apartments or spaces up to 1,500 sq ft, 45–50 pint models provide reliable continuous control.\n\nManufacturer coverage area claims are often optimistic. If your apartment has persistent mold problems or experiences high outdoor humidity during summer, size up by one category. An undersized dehumidifier that runs continuously will wear out sooner and never achieve your target humidity level.",
      },
      {
        heading: "Key Features to Evaluate Before Buying",
        content:
          "Tank capacity and continuous drain: Small dehumidifiers have built-in water tanks ranging from 20 oz to 100+ oz. In humid conditions a small tank fills within hours and must be manually emptied daily or more frequently. Models with a continuous drain port allow a hose to route water directly to a floor drain or bucket, enabling unattended operation. For any dehumidifier you plan to run overnight or while away from home, continuous drain capability is strongly recommended.\n\nBuilt-in humidistat: A humidistat lets you set a target relative humidity (such as 45%). The dehumidifier cycles on and off to maintain that level rather than running continuously. Without a humidistat, units run at full power regardless of ambient humidity, which wastes energy and can over-dry small spaces.\n\nNoise level: Compressor-based dehumidifiers generate noise from both the compressor and the fan. Models rated under 45 dB are suitable for bedroom use. Thermoelectric (Peltier) dehumidifiers operate silently but have very low capacity — they are effective only for closets and very small spaces under high humidity conditions.\n\nEnergy Star certification: Dehumidifiers can run for many hours per day during humid seasons. Energy Star certified models use at least 15% less energy than standard models, translating to meaningful electricity cost savings over a summer of continuous operation.",
      },
      {
        heading: "Compact Units vs. Full-Capacity Models",
        content:
          "Compact thermoelectric dehumidifiers (typically 16–35 oz capacity) are the right choice for very targeted applications: a single bathroom, a closet susceptible to mildew, or a small bedroom with mild humidity. They operate silently, cost less than $50, and require no complicated setup. Their limitation is capacity — they cannot meaningfully reduce humidity in an open apartment space.\n\nCompressor-based compact dehumidifiers (20–30 pint range) bridge the gap for studios and one-bedroom apartments. They handle moderate humidity problems in spaces up to 800 sq ft, produce some operational noise, and require daily tank emptying unless configured with a continuous drain.\n\nFull-capacity compressor models (45–80 pint range) are sized for persistent moisture problems across larger apartments, ground-floor units with concrete slab construction, and basements. They are bulkier, louder, and more expensive, but provide the water removal capacity to genuinely control serious humidity issues. These models almost always include continuous drain capability and should be the choice for any apartment with visible mold or condensation on walls.",
      },
    ],
    recommendations: [
      {
        title: "Best Dehumidifiers for Apartments",
        description:
          "Our ranked selection of compact, mid-size, and Energy Star dehumidifiers suited for apartments, studios, and small rooms.",
        href: "/best/best-dehumidifiers-apartment",
      },
      {
        title: "Best Humidity & Temperature Monitors",
        description:
          "Pair your dehumidifier with a hygrometer to monitor relative humidity and confirm your unit is maintaining the target range.",
        href: "/best/best-humidity-temperature-monitors",
      },
    ],
    faqs: [
      {
        q: "What humidity level should I set my dehumidifier to?",
        a: "Set your dehumidifier's target humidity to 45–50% relative humidity. This range is within the EPA-recommended 30–50% for indoor spaces, prevents mold growth (which accelerates above 60%), and avoids the dry-air problems that occur below 30%. If mold is already present, drop the target to 40% until the problem is resolved, then raise it to the comfort range.",
      },
      {
        q: "Will a dehumidifier help with mold in my apartment?",
        a: "A dehumidifier prevents mold by removing the moisture mold needs to grow. However, it will not kill existing mold colonies — visible mold must be physically removed with appropriate cleaning products. After remediation, a dehumidifier prevents regrowth by keeping relative humidity below 50%.",
      },
      {
        q: "How much does it cost to run a dehumidifier?",
        a: "A typical 30-pint Energy Star dehumidifier uses approximately 300–400 watts during operation. Running 8 hours per day at the US average electricity rate costs roughly $10–15 per month. Full-capacity 70-pint models use more power — approximately $20–30 per month at the same usage. Energy Star models save 15–20% compared to non-certified units.",
      },
    ],
    relatedSlugs: [
      "how-to-read-hygrometer-humidity-levels",
      "do-air-purifiers-actually-work",
    ],
  },
  {
    slug: "smoke-detector-types-ionization-photoelectric",
    title: "Smoke Detector Types Explained: Ionization vs Photoelectric",
    tag: "Health & Safety",
    readTime: "7 min",
    image: "/guides/smoke-detector-types-ionization-photoelectric.jpg",
    heroImage: "/guides/smoke-detector-types-ionization-photoelectric.jpg",
    thumbnailImage: "/guides/smoke-detector-types-ionization-photoelectric-thumb.jpg",
    metaTitle: "Ionization vs Photoelectric Smoke Detectors: What's the Difference? | AptAirSense",
    metaDescription:
      "Ionization and photoelectric smoke detectors respond to fires differently. Learn which type is better for apartments and which one to choose for each room.",
    intro:
      "Not all smoke detectors respond to fire the same way. Ionization sensors detect fast-flaming fires quickly, while photoelectric sensors are better at catching slow, smoldering fires. Here's what each type means for your apartment.",
    sections: [
      {
        heading: "How Ionization Smoke Detectors Work",
        content:
          "Ionization detectors contain a small amount of americium-241, a radioactive material that ionizes the air between two electrically charged plates inside the sensor chamber. This creates a small, continuous electrical current between the plates. When smoke particles enter the chamber, they attach to the ionized air molecules and disrupt the current flow. The detector interprets this disruption as smoke and triggers the alarm.\n\nIonization sensors are particularly sensitive to the tiny combustion particles produced by fast, flaming fires — the kind generated by burning paper, wood, or fabric with visible flames. In laboratory tests, ionization alarms respond to this type of fire on average 30–90 seconds faster than photoelectric alarms.\n\nThe trade-off: ionization detectors are more prone to false alarms from cooking. The tiny particles produced by toasting bread or searing meat are similar enough to combustion particles that the sensor cannot distinguish them from a real fire. This nuisance alarm problem is the most common reason residents disable or remove smoke detectors — a serious safety risk.",
      },
      {
        heading: "How Photoelectric Smoke Detectors Work",
        content:
          "Photoelectric detectors use a light source (typically an LED) and a light sensor positioned at a 90-degree angle inside a sensing chamber. In clean air, the light beam passes straight through without reaching the sensor. When larger smoke particles enter the chamber — the kind produced by smoldering, slow-burning fires — they scatter the light beam, redirecting some light onto the sensor. The detector triggers when enough scattered light reaches the sensor.\n\nPhotoelectric sensors respond faster to smoldering fires — the type that begins with a heat source against upholstery, bedding, or insulation before breaking into open flame. Research by the National Institute of Standards and Technology (NIST) found that smoldering fires produce significantly longer warning times with photoelectric detectors, sometimes providing 20–50 additional minutes of warning before flashover.\n\nPhotoelectric detectors are also less sensitive to cooking aerosols, making them a better choice for placement near kitchens. They are the recommended type for bedroom installation, where smoldering fire risks (electrical faults, overheated electronics, smoking in bed) are highest.",
      },
      {
        heading: "Which Type Is Right for Your Apartment?",
        content:
          "Fire safety organizations including the NFPA and the International Association of Fire Chiefs recommend installing both types of smoke detectors — or dual-sensor models that combine both technologies — for the most comprehensive protection. No single sensor type is universally superior across all fire scenarios.\n\nFor apartment renters, the practical guidance: use photoelectric detectors in or near bedrooms and kitchens, where slow-smoldering fires and cooking nuisance alarms are the primary concerns. Ionization detectors or dual-sensor models are appropriate in living rooms and hallways where fast-flaming fires from candles, fireplaces, or electrical outlets are the primary risk.\n\nDual-sensor combination detectors include both ionization and photoelectric sensors in a single unit, providing response to both fire types without requiring two separate devices. These are the recommended choice when you want a single device that handles all scenarios. When evaluating combination models, verify that both the smoke sensor and any CO sensor in the unit carry separate UL certifications (UL 217 for smoke, UL 2034 for CO).",
      },
    ],
    recommendations: [
      {
        title: "Best Smoke Detectors for Apartments",
        description:
          "Battery, hardwired, and smart interconnected smoke alarms reviewed for apartment installation — including photoelectric and dual-sensor models.",
        href: "/best/best-smoke-detectors-apartment",
      },
      {
        title: "Best CO Detectors for Apartments",
        description:
          "Complete your apartment safety setup with a dedicated CO detector alongside your smoke alarm.",
        href: "/best/best-carbon-monoxide-detectors",
      },
    ],
    faqs: [
      {
        q: "Is one type of smoke detector safer than the other?",
        a: "Neither type is categorically safer — they protect against different fire scenarios. Ionization detectors provide faster response to flaming fires; photoelectric detectors provide faster response to smoldering fires. The NFPA recommends installing both types or dual-sensor combination units for comprehensive protection.",
      },
      {
        q: "Why does my smoke alarm keep going off when I cook?",
        a: "Cooking-related false alarms are almost always caused by ionization detectors near the kitchen. The particles from cooking aerosols are similar in size to combustion particles and trigger the sensor. Solutions: replace the kitchen-area detector with a photoelectric model, which is far less sensitive to cooking aerosols; or use a heat detector (not a smoke detector) directly in the kitchen and install a smoke detector in the adjacent hallway.",
      },
      {
        q: "How do I know which type of detector I already have?",
        a: "Check the back of your existing detector for the UL listing. Ionization detectors are listed under UL 217 with 'ionization' noted in the description. Photoelectric detectors list 'photoelectric' technology. Dual-sensor models note both. You can also check the model number on the manufacturer's website. Many apartment-installed detectors are ionization-only models.",
      },
    ],
    relatedSlugs: [
      "what-is-carbon-monoxide-co-detectors",
      "do-air-purifiers-actually-work",
    ],
  },
  {
    slug: "window-vs-portable-air-conditioner-apartment",
    title: "Window vs Portable Air Conditioner: Which Is Right for Your Apartment?",
    tag: "Buying Guide",
    readTime: "8 min",
    image: "/guides/window-vs-portable-air-conditioner-apartment.jpg",
    heroImage: "/guides/window-vs-portable-air-conditioner-apartment.jpg",
    thumbnailImage: "/guides/window-vs-portable-air-conditioner-apartment-thumb.jpg",
    metaTitle: "Window vs Portable Air Conditioner for Apartments | AptAirSense",
    metaDescription:
      "Window and portable ACs both cool apartments, but in very different ways. Learn which type fits your lease, window type, and room layout.",
    intro:
      "Window and portable air conditioners serve the same purpose but in very different ways. Your lease restrictions, window type, and room layout will largely determine which option makes sense for your apartment.",
    sections: [
      {
        heading: "Window Air Conditioners: Efficiency, Installation, and Limits",
        content:
          "Window air conditioners mount directly into a double-hung or sliding window and vent heat outside through the back of the unit. This sealed installation means the unit processes indoor air and exhausts heat efficiently — no hot-air leakage back into the room. A properly installed 5,000 BTU window unit can cool a 150 sq ft room to 20–25°F below outdoor temperature in an hour.\n\nEfficiency: Window ACs are significantly more efficient than equivalent portable units. The EER (Energy Efficiency Ratio) of most window ACs ranges from 10–12, compared to 8–10 for portable ACs at equivalent BTU output. This means window units cool the same space for 15–30% less electricity cost over a season.\n\nInstallation: Most window ACs come with an accordion-style side panel and a sash lock bracket. Installation takes 15–30 minutes and is reversible — no permanent modifications are required. However, installation does require placing the unit in the window frame, which some landlords prohibit or require prior approval for. Safety brackets are required to prevent the unit from falling, particularly in upper-floor apartments.\n\nLimitations: Window ACs require a compatible window — most are designed for double-hung windows. Casement windows (side-hinged) require specialty models. Fixed windows cannot accommodate window ACs. Units also block the window entirely, which may matter if the window provides significant natural light or ventilation when not in use.",
      },
      {
        heading: "Portable Air Conditioners: Flexibility, Drawbacks, and Best Uses",
        content:
          "Portable air conditioners sit on the floor inside the room and vent hot air through an exhaust hose inserted into a partially-open window. They require no permanent installation — just routing the hose to any available window opening — making them the go-to choice for renters whose leases prohibit window unit installation.\n\nEfficiency drawbacks: Single-hose portable ACs — the most common type — draw replacement air from the room itself to exhaust hot air outside. This negative pressure causes warm outside air to leak back in through gaps in doors, windows, and walls. The result is that single-hose portables effectively fight themselves: they cool the air, then pull in warm replacement air, reducing net cooling efficiency significantly. Department of Energy standards now require portable ACs to carry SACC (Seasonally Adjusted Cooling Capacity) ratings that reflect real-world efficiency — these numbers are typically 30–40% lower than the BTU rating on the box.\n\nDual-hose models address this by drawing outside air through one hose for combustion and exhausting through a second, maintaining room pressure balance. They are more efficient than single-hose models but still lag behind window units.\n\nNoise: Portable ACs house the entire compressor unit inside the room, making them louder than window ACs at equivalent cooling capacity. Most operate at 50–60 dB, which is audible background noise in a quiet room.",
      },
      {
        heading: "How to Decide: A Practical Framework for Renters",
        content:
          "Check your lease first. Before purchasing anything, review your lease agreement for language about window AC installation. Many leases require written landlord approval; some prohibit modifications entirely. If your lease is silent on the topic, request written permission before installing a window unit.\n\nWindow type matters: If your apartment has double-hung or sliding windows, a window AC is almost certainly the better choice on efficiency and cost grounds. If you have casement or fixed windows, a portable AC may be your only option.\n\nRoom size is the deciding factor if both are viable: For rooms under 150 sq ft (small bedrooms, studios), any 5,000 BTU window unit provides effective cooling. For 150–350 sq ft spaces, an 8,000–10,000 BTU window unit cools effectively; portable units at equivalent BTU ratings will underperform due to efficiency losses. For larger open-plan apartments, both options become expensive to run — evaluate whether whole-apartment central cooling or multiple units makes more sense.\n\nIf you move frequently, a portable AC travels with you without any reinstallation complications. If you plan to stay in the same apartment for multiple seasons, the efficiency difference of a window unit adds up meaningfully over time.",
      },
    ],
    recommendations: [
      {
        title: "Best Air Conditioners for Apartments",
        description:
          "Our ranked list of window units and portable ACs sized for apartments and small rooms — by BTU range, noise level, and installation ease.",
        href: "/best/best-air-conditioners-apartment",
      },
      {
        title: "Best Dehumidifiers for Apartments",
        description:
          "In humid climates, pairing an AC with a dehumidifier provides better comfort than either alone — dehumidifiers target moisture while ACs handle temperature.",
        href: "/best/best-dehumidifiers-apartment",
      },
    ],
    faqs: [
      {
        q: "Can I install a window AC in a casement window?",
        a: "Standard window ACs are not designed for casement windows. Some manufacturers offer casement window kits or specialty models, but these are less common and more expensive. A portable AC with a casement window exhaust kit is generally the more practical solution for this window type.",
      },
      {
        q: "How many BTUs do I need for my apartment?",
        a: "A common rule of thumb is 20 BTU per square foot for a standard room. For a 200 sq ft bedroom, a 4,000–5,000 BTU unit is typically sufficient. Add 10% for south-facing rooms with significant sun exposure; subtract 10% for heavily shaded rooms. For open-plan apartments over 500 sq ft, consider two smaller units rather than one large one for better airflow distribution.",
      },
      {
        q: "Do portable ACs need to be vented out a window?",
        a: "Yes. Portable ACs must vent hot air to the outside through an exhaust hose. The hose requires an opening to the outdoors — most commonly a partially-open window. Without venting, the unit recirculates hot air and provides no net cooling. Some models include a window venting kit; ensure your window type is compatible before purchasing.",
      },
    ],
    relatedSlugs: [
      "how-to-choose-dehumidifier-apartment",
      "how-to-read-hygrometer-humidity-levels",
    ],
  },
  {
    slug: "do-air-purifiers-actually-work",
    title: "Do Air Purifiers Actually Work? What the Science Says",
    tag: "Science Explained",
    readTime: "9 min",
    image: "/guides/do-air-purifiers-actually-work.jpg",
    heroImage: "/guides/do-air-purifiers-actually-work.jpg",
    thumbnailImage: "/guides/do-air-purifiers-actually-work-thumb.jpg",
    metaTitle: "Do Air Purifiers Actually Work? The Science-Backed Answer | AptAirSense",
    metaDescription:
      "Air purifiers have become a fixture in apartments, but the evidence for their effectiveness varies. True HEPA filtration has the strongest data — here's what actually works.",
    intro:
      "Air purifiers have become a fixture in apartments, but the evidence for their effectiveness varies by pollutant type and filter technology. True HEPA filtration has the strongest data — here's what actually works and what doesn't.",
    sections: [
      {
        heading: "What the Evidence Says About True HEPA Filtration",
        content:
          "The evidence for True HEPA filtration is robust and well-established. HEPA (High-Efficiency Particulate Air) filters are physically certified to capture 99.97% of particles 0.3 micrometers and larger. This is a mechanical process — particles are physically trapped in filter fibers through impaction, interception, and diffusion, depending on particle size.\n\nFor PM2.5 specifically, multiple peer-reviewed studies confirm significant particle reductions in occupied rooms. A 2020 study in JAMA Internal Medicine found that HEPA purifiers in wildfire-affected homes reduced indoor PM2.5 by 58–70% compared to control rooms. A 2019 meta-analysis in the journal Indoor Air found average PM2.5 reductions of 35–50% in bedrooms with continuous HEPA operation across multiple studies.\n\nFor allergy and asthma sufferers, the evidence is similarly positive. A 2018 meta-analysis found that HEPA air purifiers in bedroom environments produced statistically significant reductions in allergic rhinitis symptoms. For pet dander specifically, continuous HEPA operation in rooms where pets spend time can reduce airborne allergen concentrations by 70–90% according to multiple controlled studies.\n\nThe key qualifier throughout this evidence: True HEPA specifically, not 'HEPA-type' or 'HEPA-style' — marketing labels that carry no certified performance standard.",
      },
      {
        heading: "What Air Purifiers Cannot Do",
        content:
          "The evidence for air purifier limitations is equally clear, and understanding these limits helps you use purifiers appropriately.\n\nCarbon monoxide and CO2: HEPA filters cannot remove gases. CO and CO2 are molecular gases, not particles — they pass straight through HEPA media. Dedicated CO detectors and ventilation are the only solutions for these pollutants.\n\nMost VOCs: Standard HEPA filters do not remove gaseous volatile organic compounds. Some purifiers include activated carbon filters that adsorb a portion of VOC molecules, but carbon filters have limited capacity, deplete over time, and require frequent replacement to remain effective. For significant VOC sources — freshly painted rooms, new furniture off-gassing — ventilation provides far greater VOC reduction than any filter.\n\nOdors at the source: HEPA filters remove particles that carry some odors (cooking smoke, dust), but cannot remove gaseous odorant molecules. Activated carbon addresses some gaseous odors but is not a comprehensive solution.\n\nTechnologies to approach with caution: Ionizers and plasma generators produce charged particles that precipitate onto surfaces, not air — and may generate ozone, a respiratory irritant. UV-C lights in residential purifiers have exposure times too brief to meaningfully inactivate pathogens. These technologies add cost without the peer-reviewed evidence behind True HEPA.",
      },
      {
        heading: "Getting the Most from Your Air Purifier",
        content:
          "Sizing matters more than brand. Match the purifier's AHAM-certified CADR (Clean Air Delivery Rate) to your room size. For effective allergen and PM2.5 control, buy a purifier rated for 2–3x your actual room area — this delivers 4–5 air changes per hour at the lower fan speeds where noise is manageable. Underpowered purifiers running at maximum speed produce more noise than air changes.\n\nRun it continuously at low speed rather than intermittently at high speed. Studies consistently show that continuous low-speed operation maintains lower baseline particle levels than periodic high-speed bursts. Most HEPA purifiers consume 20–40 watts on medium settings — comparable to an LED bulb — making continuous operation cost-effective.\n\nPosition the purifier where you spend the most time. For apartments, this almost always means the bedroom. Running a bedroom purifier continuously during sleep is the highest-impact single air quality intervention available for particle-related health concerns.\n\nReplace filters on schedule. A loaded HEPA filter reduces airflow and filtration efficiency. Follow the manufacturer's recommended replacement interval (typically 6–12 months) and pre-filter cleaning schedule. Some purifiers include filter life indicators based on actual airflow measurements rather than simple timers — these are more reliable.",
      },
    ],
    recommendations: [
      {
        title: "Best Air Purifiers for Small Rooms",
        description:
          "Our full ranking of True HEPA air purifiers for apartments and bedrooms, sorted by CADR, noise level, and value.",
        href: "/best/best-air-purifiers-small-rooms",
      },
      {
        title: "Best Humidity & Temperature Monitors",
        description:
          "Pair your purifier with a hygrometer to ensure you're maintaining healthy humidity alongside particle-free air.",
        href: "/best/best-humidity-temperature-monitors",
      },
    ],
    faqs: [
      {
        q: "Are expensive air purifiers worth it?",
        a: "Not necessarily. The most important factor is AHAM-certified CADR relative to your room size. A well-designed $100 purifier with verified CADR may outperform a $500 purifier without certification. After ensuring adequate CADR, additional cost typically buys quieter operation, longer filter life, smart features, and more aesthetically appealing design.",
      },
      {
        q: "Can air purifiers help with wildfire smoke?",
        a: "Yes — this is one of the strongest evidence categories for HEPA purifier effectiveness. During wildfire events, indoor PM2.5 levels can exceed safe levels even with windows closed. A properly sized HEPA purifier can reduce indoor wildfire smoke particle concentrations by 50–70% according to multiple studies. Run the purifier on high during smoke events and seal window gaps with tape or towels for maximum effect.",
      },
      {
        q: "How long should I run my air purifier each day?",
        a: "For maximum effectiveness, run it continuously at low to medium speed. If energy cost is a concern, prioritize running during sleep in the bedroom and during cooking in the kitchen or adjacent area. Stopping a purifier for 8 hours allows particles to re-accumulate; it typically takes 30–60 minutes on medium to return to baseline filtered levels after an 8-hour pause.",
      },
    ],
    relatedSlugs: [
      "how-to-choose-dehumidifier-apartment",
      "smoke-detector-types-ionization-photoelectric",
    ],
  },
  {
    slug: "how-to-read-hygrometer-humidity-levels",
    title: "How to Read Your Hygrometer: What Humidity Levels Mean for Your Home",
    tag: "Practical Tips",
    readTime: "7 min",
    image: "/guides/how-to-read-hygrometer-humidity-levels.jpg",
    heroImage: "/guides/how-to-read-hygrometer-humidity-levels.jpg",
    thumbnailImage: "/guides/how-to-read-hygrometer-humidity-levels-thumb.jpg",
    metaTitle: "How to Read Your Hygrometer: Humidity Levels Explained | AptAirSense",
    metaDescription:
      "A hygrometer tells you the relative humidity in your home. Learn what the numbers mean, what ideal levels look like, and how to fix high or low humidity.",
    intro:
      "A hygrometer tells you the relative humidity in your home — but knowing what to do with that number is what matters. This guide explains ideal humidity ranges, what happens when levels are too high or too low, and how to fix common problems.",
    sections: [
      {
        heading: "What Relative Humidity Means and How to Read It",
        content:
          "Relative humidity (RH) is expressed as a percentage and represents how much water vapor is in the air relative to the maximum amount the air can hold at a given temperature. At 100% RH, air is fully saturated and condensation forms on surfaces. At 0% RH, air is completely dry — a condition that doesn't naturally occur indoors.\n\nYour hygrometer displays current RH as a percentage alongside the temperature. A reading of 55% RH means the air contains 55% of the maximum water it could hold at that temperature — enough to feel slightly humid on warm days.\n\nWhat the numbers mean for health and home:\n\nBelow 30% RH: Air is too dry. Mucous membranes in the nose, throat, and lungs dry out, reducing their effectiveness as a barrier against viruses and bacteria. Skin dries and cracks. Static electricity increases. Wood furniture, flooring, and musical instruments may crack or warp. This condition is common in apartments with forced-air heat during winter.\n\n30–50% RH: The healthy range recommended by the EPA. Respiratory comfort is optimal. Mold growth is suppressed. Dust mites — a major allergen source — cannot survive in large numbers below 50% RH.\n\nAbove 60% RH: Air is too humid. Mold growth accelerates dramatically above 60% RH. Dust mite populations increase. Condensation forms on cool surfaces (windows, exterior walls), which can lead to structural moisture damage and hidden mold. This condition is common in poorly ventilated apartments, ground-floor units, and any apartment during humid summer months.",
      },
      {
        heading: "Interpreting Readings Throughout the Day",
        content:
          "Humidity in apartments is not static — it changes significantly throughout the day based on your activities.\n\nMorning: Humidity tends to be highest after overnight breathing in a sealed bedroom. If your bedroom hygrometer consistently shows above 60% RH in the morning, you likely need ventilation or a dehumidifier to prevent long-term mold risk.\n\nAfter showering: Bathroom humidity spikes to 80–90% RH within minutes of a hot shower. Without an exhaust fan, this moisture migrates to adjacent rooms within 30–60 minutes. Always run the exhaust fan during showers and for at least 15 minutes afterward.\n\nAfter cooking: Boiling, steaming, and dishwashing all introduce significant moisture. Kitchen RH can temporarily reach 70–80% during cooking. Range hood exhaust fans reduce this, but the effect is temporary — humidity typically normalizes within 20–30 minutes of ventilation.\n\nSeasonal patterns: In most of the US, indoor humidity is lowest in winter (forced-air heat removes moisture) and highest in summer (outdoor air has higher absolute humidity). Most apartment humidity problems are seasonal: dry air in winter, excessive humidity in summer. A single hygrometer placed in the main living area gives you enough information to identify both problems.",
      },
      {
        heading: "Fixing High and Low Humidity Problems",
        content:
          "For humidity below 30% (too dry): The most effective solution is a portable humidifier. Ultrasonic cool-mist humidifiers are quiet and energy-efficient. Use distilled or demineralized water to prevent the white mineral dust that tap water humidifiers deposit on furniture. Position the humidifier near your hygrometer but not adjacent to it (the hygrometer will read artificially high near the mist output). Check your hygrometer every few hours when first using a humidifier — overshooting into 60%+ territory creates a mold risk.\n\nFor humidity above 60% (too humid): A dehumidifier is the most effective solution. Size it appropriately for your room — a 20-pint unit handles most bedrooms and small apartments. Complement mechanical dehumidification with behavioral changes: run exhaust fans longer after showers and cooking; avoid air-drying laundry indoors if humidity is already elevated; keep bathroom and kitchen doors closed during and after high-moisture activities.\n\nFor humidity between 50–60% (borderline): This range warrants monitoring rather than immediate action. If readings are consistently at the high end of this range — especially in summer or in rooms with limited ventilation — preventive dehumidification is worthwhile. Check closets and corners where air circulation is lowest, as these spots can reach higher humidity than open room centers even when your hygrometer reads 55%.",
      },
    ],
    recommendations: [
      {
        title: "Best Humidity & Temperature Monitors",
        description:
          "Our ranked selection of digital hygrometers for apartments — from simple single-room displays to Bluetooth multi-room monitoring systems.",
        href: "/best/best-humidity-temperature-monitors",
      },
      {
        title: "Best Dehumidifiers for Apartments",
        description:
          "When your hygrometer consistently shows above 60% RH, a dehumidifier is the most effective fix. See our ranked list by room size and capacity.",
        href: "/best/best-dehumidifiers-apartment",
      },
    ],
    faqs: [
      {
        q: "Where is the best place to put a hygrometer in my apartment?",
        a: "Place your hygrometer in the room where you spend the most time — typically the main living area or bedroom. Position it at breathing height (3–5 feet above the floor), away from windows, exterior walls, and any humidifier or dehumidifier output. Avoid kitchens and bathrooms, where temporary activity causes humidity swings that don't represent the overall apartment condition.",
      },
      {
        q: "My hygrometer reads 70% in the morning — is that a problem?",
        a: "Yes, a consistent morning reading of 70% in a sealed bedroom indicates a real humidity problem. Two people sleeping in a sealed room exhale a significant amount of moisture overnight. Solutions: crack a window before bed (even 1 inch helps significantly); run a dehumidifier on a timer during sleeping hours; or improve bathroom ventilation so post-shower moisture doesn't migrate to the bedroom.",
      },
      {
        q: "How accurate are cheap hygrometers?",
        a: "Budget hygrometers (under $15) typically have accuracy of ±5–8% RH. For most apartment use, this is adequate — you don't need laboratory precision to know whether to run a humidifier or dehumidifier. For documentation purposes (landlord disputes over mold conditions), invest in a device with ±2–3% RH accuracy and a data export feature to provide time-stamped evidence.",
      },
    ],
    relatedSlugs: [
      "how-to-choose-dehumidifier-apartment",
      "what-is-carbon-monoxide-co-detectors",
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
