const MAP_WIDTH = 1536;
const MAP_HEIGHT = 828;

const ZONE_OFFSETS = [
  -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
  0, 1, 2, 3, 3.5, 4, 5, 5.5, 6, 7, 8, 9, 9.5, 10, 11, 12, 13, 14
];

const CONTINENTS = [
  {
    key: "asia",
    title: "亞洲",
    en: "Asia",
    colors: ["#f25b87", "#ffd36d"],
    countries: [
      { country: "台灣", en: "Taiwan", flag: "🇹🇼", cities: [
        { name: "台北", en: "Taipei", timeZone: "Asia/Taipei", offset: 8, x: 81.7, y: 43.7 }
      ]},
      { country: "日本", en: "Japan", flag: "🇯🇵", cities: [
        { name: "東京", en: "Tokyo", timeZone: "Asia/Tokyo", offset: 9, x: 86.5, y: 37.3 },
        { name: "大阪", en: "Osaka", timeZone: "Asia/Tokyo", offset: 9, x: 85.7, y: 39.5 },
        { name: "札幌", en: "Sapporo", timeZone: "Asia/Tokyo", offset: 9, x: 87.0, y: 33.5 },
        { name: "福岡", en: "Fukuoka", timeZone: "Asia/Tokyo", offset: 9, x: 84.5, y: 41.4 }
      ]},
      { country: "韓國", en: "South Korea", flag: "🇰🇷", cities: [
        { name: "首爾", en: "Seoul", timeZone: "Asia/Seoul", offset: 9, x: 83.2, y: 36.1 },
        { name: "釜山", en: "Busan", timeZone: "Asia/Seoul", offset: 9, x: 83.5, y: 39.3 }
      ]},
      { country: "香港", en: "Hong Kong", flag: "🇭🇰", cities: [
        { name: "香港", en: "Hong Kong", timeZone: "Asia/Hong_Kong", offset: 8, x: 79.8, y: 45.3 }
      ]},
      { country: "新加坡", en: "Singapore", flag: "🇸🇬", cities: [
        { name: "新加坡", en: "Singapore", timeZone: "Asia/Singapore", offset: 8, x: 77.1, y: 58.0 }
      ]},
      { country: "印度", en: "India", flag: "🇮🇳", cities: [
        { name: "新德里", en: "New Delhi", timeZone: "Asia/Kolkata", offset: 5.5, x: 70.2, y: 41.5 },
        { name: "孟買", en: "Mumbai", timeZone: "Asia/Kolkata", offset: 5.5, x: 69.0, y: 47.3 }
      ]},
      { country: "泰國", en: "Thailand", flag: "🇹🇭", cities: [
        { name: "曼谷", en: "Bangkok", timeZone: "Asia/Bangkok", offset: 7, x: 76.2, y: 50.5 }
      ]},
      { country: "越南", en: "Vietnam", flag: "🇻🇳", cities: [
        { name: "河內", en: "Hanoi", timeZone: "Asia/Ho_Chi_Minh", offset: 7, x: 77.7, y: 47.6 },
        { name: "胡志明市", en: "Ho Chi Minh City", timeZone: "Asia/Ho_Chi_Minh", offset: 7, x: 77.8, y: 52.3 }
      ]},
      { country: "馬來西亞", en: "Malaysia", flag: "🇲🇾", cities: [
        { name: "吉隆坡", en: "Kuala Lumpur", timeZone: "Asia/Kuala_Lumpur", offset: 8, x: 76.6, y: 56.9 }
      ]},
      { country: "菲律賓", en: "Philippines", flag: "🇵🇭", cities: [
        { name: "馬尼拉", en: "Manila", timeZone: "Asia/Manila", offset: 8, x: 81.6, y: 50.0 }
      ]},
      { country: "印尼", en: "Indonesia", flag: "🇮🇩", cities: [
        { name: "雅加達", en: "Jakarta", timeZone: "Asia/Jakarta", offset: 7, x: 77.9, y: 62.5 },
        { name: "峇里島", en: "Bali", timeZone: "Asia/Makassar", offset: 8, x: 81.0, y: 64.0 }
      ]},
      { country: "阿拉伯聯合大公國", en: "UAE", flag: "🇦🇪", cities: [
        { name: "杜拜", en: "Dubai", timeZone: "Asia/Dubai", offset: 4, x: 64.4, y: 43.6 }
      ]}
    ]
  },
  {
    key: "europe",
    title: "歐洲",
    en: "Europe",
    colors: ["#769dff", "#77e1ff"],
    countries: [
      { country: "英國", en: "United Kingdom", flag: "🇬🇧", cities: [
        { name: "倫敦", en: "London", timeZone: "Europe/London", offset: 0, x: 50.0, y: 27.7 }
      ]},
      { country: "法國", en: "France", flag: "🇫🇷", cities: [
        { name: "巴黎", en: "Paris", timeZone: "Europe/Paris", offset: 1, x: 50.6, y: 29.3 },
        { name: "馬賽", en: "Marseille", timeZone: "Europe/Paris", offset: 1, x: 51.4, y: 35.3 },
        { name: "里昂", en: "Lyon", timeZone: "Europe/Paris", offset: 1, x: 51.5, y: 32.4 }
      ]},
      { country: "德國", en: "Germany", flag: "🇩🇪", cities: [
        { name: "柏林", en: "Berlin", timeZone: "Europe/Berlin", offset: 1, x: 53.5, y: 27.1 },
        { name: "慕尼黑", en: "Munich", timeZone: "Europe/Berlin", offset: 1, x: 53.3, y: 31.5 },
        { name: "法蘭克福", en: "Frankfurt", timeZone: "Europe/Berlin", offset: 1, x: 52.3, y: 30.2 }
      ]},
      { country: "義大利", en: "Italy", flag: "🇮🇹", cities: [
        { name: "羅馬", en: "Rome", timeZone: "Europe/Rome", offset: 1, x: 53.3, y: 33.5 },
        { name: "米蘭", en: "Milan", timeZone: "Europe/Rome", offset: 1, x: 52.4, y: 31.3 }
      ]},
      { country: "西班牙", en: "Spain", flag: "🇪🇸", cities: [
        { name: "馬德里", en: "Madrid", timeZone: "Europe/Madrid", offset: 1, x: 49.0, y: 34.4 },
        { name: "巴塞隆納", en: "Barcelona", timeZone: "Europe/Madrid", offset: 1, x: 50.8, y: 34.2 }
      ]},
      { country: "荷蘭", en: "Netherlands", flag: "🇳🇱", cities: [
        { name: "阿姆斯特丹", en: "Amsterdam", timeZone: "Europe/Amsterdam", offset: 1, x: 51.6, y: 28.3 }
      ]},
      { country: "瑞士", en: "Switzerland", flag: "🇨🇭", cities: [
        { name: "蘇黎世", en: "Zurich", timeZone: "Europe/Zurich", offset: 1, x: 52.3, y: 31.7 }
      ]},
      { country: "希臘", en: "Greece", flag: "🇬🇷", cities: [
        { name: "雅典", en: "Athens", timeZone: "Europe/Athens", offset: 2, x: 56.2, y: 35.9 }
      ]},
      { country: "土耳其", en: "Türkiye", flag: "🇹🇷", cities: [
        { name: "伊斯坦堡", en: "Istanbul", timeZone: "Europe/Istanbul", offset: 3, x: 57.6, y: 34.0 }
      ]}
    ]
  },
  {
    key: "oceania",
    title: "大洋洲",
    en: "Oceania",
    colors: ["#20c8c9", "#96f6ff"],
    countries: [
      { country: "澳洲", en: "Australia", flag: "🇦🇺", cities: [
        { name: "柏斯", en: "Perth", timeZone: "Australia/Perth", offset: 8, x: 80.3, y: 78.1 },
        { name: "達爾文", en: "Darwin", timeZone: "Australia/Darwin", offset: 9.5, x: 84.2, y: 66.3 },
        { name: "布里斯本", en: "Brisbane", timeZone: "Australia/Brisbane", offset: 10, x: 90.0, y: 75.4 },
        { name: "雪梨", en: "Sydney", timeZone: "Australia/Sydney", offset: 10, x: 89.5, y: 79.2 },
        { name: "墨爾本", en: "Melbourne", timeZone: "Australia/Melbourne", offset: 10, x: 87.9, y: 81.6 }
      ]},
      { country: "紐西蘭", en: "New Zealand", flag: "🇳🇿", cities: [
        { name: "奧克蘭", en: "Auckland", timeZone: "Pacific/Auckland", offset: 12, x: 95.6, y: 81.0 },
        { name: "威靈頓", en: "Wellington", timeZone: "Pacific/Auckland", offset: 12, x: 95.2, y: 84.4 }
      ]},
      { country: "斐濟", en: "Fiji", flag: "🇫🇯", cities: [
        { name: "蘇瓦", en: "Suva", timeZone: "Pacific/Fiji", offset: 12, x: 96.6, y: 69.7 }
      ]}
    ]
  },
  {
    key: "north-america",
    title: "北美洲",
    en: "North America",
    colors: ["#f39d42", "#ffca62"],
    countries: [
      { country: "美國", en: "United States", flag: "🇺🇸", cities: [
        { name: "紐約", en: "New York", timeZone: "America/New_York", offset: -5, x: 30.7, y: 34.2 },
        { name: "洛杉磯", en: "Los Angeles", timeZone: "America/Los_Angeles", offset: -8, x: 19.1, y: 38.2 },
        { name: "芝加哥", en: "Chicago", timeZone: "America/Chicago", offset: -6, x: 27.1, y: 33.5 },
        { name: "休士頓", en: "Houston", timeZone: "America/Chicago", offset: -6, x: 24.4, y: 40.6 },
        { name: "舊金山", en: "San Francisco", timeZone: "America/Los_Angeles", offset: -8, x: 18.0, y: 36.0 },
        { name: "檀香山", en: "Honolulu", timeZone: "Pacific/Honolulu", offset: -10, x: 8.8, y: 45.9 }
      ]},
      { country: "加拿大", en: "Canada", flag: "🇨🇦", cities: [
        { name: "多倫多", en: "Toronto", timeZone: "America/Toronto", offset: -5, x: 29.3, y: 32.5 },
        { name: "溫哥華", en: "Vancouver", timeZone: "America/Vancouver", offset: -8, x: 17.9, y: 29.1 },
        { name: "蒙特婁", en: "Montreal", timeZone: "America/Toronto", offset: -5, x: 31.2, y: 31.0 }
      ]},
      { country: "墨西哥", en: "Mexico", flag: "🇲🇽", cities: [
        { name: "墨西哥城", en: "Mexico City", timeZone: "America/Mexico_City", offset: -6, x: 24.1, y: 47.1 }
      ]}
    ]
  },
  {
    key: "south-america",
    title: "南美洲",
    en: "South America",
    colors: ["#6bbd5a", "#a7e46f"],
    countries: [
      { country: "巴西", en: "Brazil", flag: "🇧🇷", cities: [
        { name: "里約熱內盧", en: "Rio de Janeiro", timeZone: "America/Sao_Paulo", offset: -3, x: 38.7, y: 72.6 },
        { name: "聖保羅", en: "São Paulo", timeZone: "America/Sao_Paulo", offset: -3, x: 37.8, y: 73.0 }
      ]},
      { country: "阿根廷", en: "Argentina", flag: "🇦🇷", cities: [
        { name: "布宜諾斯艾利斯", en: "Buenos Aires", timeZone: "America/Argentina/Buenos_Aires", offset: -3, x: 34.8, y: 79.7 }
      ]},
      { country: "智利", en: "Chile", flag: "🇨🇱", cities: [
        { name: "聖地牙哥", en: "Santiago", timeZone: "America/Santiago", offset: -4, x: 31.5, y: 79.0 }
      ]},
      { country: "哥倫比亞", en: "Colombia", flag: "🇨🇴", cities: [
        { name: "波哥大", en: "Bogotá", timeZone: "America/Bogota", offset: -5, x: 31.0, y: 55.0 }
      ]},
      { country: "秘魯", en: "Peru", flag: "🇵🇪", cities: [
        { name: "利馬", en: "Lima", timeZone: "America/Lima", offset: -5, x: 29.9, y: 66.1 }
      ]}
    ]
  }
];

const ALL_CITIES = CONTINENTS.flatMap((continent) =>
  continent.countries.flatMap((country) =>
    country.cities.map((city) => ({
      ...city,
      continentKey: continent.key,
      continentTitle: continent.title,
      continentEn: continent.en,
      country: country.country,
      countryEn: country.en,
      flag: country.flag
    }))
  )
);

const state = {
  mode: "live",
  is24: true,
  selectedOffset: null,
  selectedCity: null,
  searchCity: null
};

const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");

function formatOffset(offset) {
  const sign = offset >= 0 ? "+" : "-";
  const abs = Math.abs(offset);
  const hours = Math.trunc(abs);
  const minutes = Math.round((abs - hours) * 60);
  return `UTC${sign}${hours}${minutes ? ":" + pad(minutes) : ""}`;
}

function initDateInput() {
  const d = new Date();
  $("baseTime").value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function readInputDate(value) {
  if (!value) return new Date();
  const [datePart, timePart] = value.split("T");
  if (!datePart || !timePart) return new Date();
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute, 0);
}

function currentDate() {
  return state.mode === "live" ? new Date() : readInputDate($("baseTime").value);
}

function formatInZone(date, timeZone, withSeconds = false) {
  const options = {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !state.is24,
    timeZoneName: "shortOffset"
  };
  if (withSeconds) options.second = "2-digit";

  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("zh-TW", options).formatToParts(date).map((part) => [part.type, part.value])
  );
  const time = state.is24
    ? `${parts.hour}:${parts.minute}${withSeconds ? ":" + parts.second : ""}`
    : `${parts.dayPeriod || ""} ${parts.hour}:${parts.minute}`.trim();
  return { time, ymd: `${parts.year}-${parts.month}-${parts.day}`, offset: parts.timeZoneName || "" };
}

function formatUtc(date) {
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
}

function dateDiffTag(date, timeZone) {
  const localStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const zoneDate = formatInZone(date, timeZone).ymd;
  const zoneStart = new Date(`${zoneDate}T00:00:00`);
  const diff = Math.round((zoneStart - localStart) / 86400000);
  if (!diff) return "";
  return `<span class="day-diff">${diff > 0 ? "+" : ""}${diff}日</span>`;
}

function normalize(text) {
  return String(text).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[\s·・,._-]+/g, "");
}

function cityMatches(city, query) {
  if (!query) return true;
  const q = normalize(query);
  const haystack = [
    city.name,
    city.en,
    city.country,
    city.countryEn,
    city.continentTitle,
    city.continentEn,
    city.timeZone,
    formatOffset(city.offset),
    `utc${city.offset >= 0 ? "+" : ""}${city.offset}`,
    `gmt${city.offset >= 0 ? "+" : ""}${city.offset}`
  ].map(normalize).join("|");
  return haystack.includes(q);
}

function exactSearchCity(query) {
  const q = normalize(query);
  if (!q) return null;
  return ALL_CITIES.find((city) => [city.name, city.en].map(normalize).includes(q)) ||
         ALL_CITIES.find((city) => cityMatches(city, query)) || null;
}

function filteredCities() {
  const query = $("search").value.trim();
  return ALL_CITIES.filter((city) => cityMatches(city, query));
}

function applySearchSelection() {
  const query = $("search").value.trim();
  const city = exactSearchCity(query);
  state.searchCity = city ? city.name : null;
  if (city) {
    state.selectedOffset = city.offset;
    state.selectedCity = city.name;
  } else if (query) {
    state.selectedCity = null;
    state.selectedOffset = null;
  }
}

function renderZones() {
  const layer = $("zoneLayer");
  layer.innerHTML = "";
  const width = MAP_WIDTH / ZONE_OFFSETS.length;
  ZONE_OFFSETS.forEach((offset, index) => {
    const x = index * width;
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "zone-click-group");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("class", "zone-band");
    rect.setAttribute("x", x);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", width + 1);
    rect.setAttribute("height", MAP_HEIGHT);
    rect.setAttribute("data-offset", String(offset));
    rect.setAttribute("role", "button");
    rect.setAttribute("tabindex", "0");
    rect.setAttribute("aria-label", `選取 ${formatOffset(offset)} 時區`);
    rect.addEventListener("click", () => toggleOffset(offset));
    rect.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleOffset(offset);
      }
    });

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("class", "zone-label");
    label.setAttribute("x", x + width / 2);
    label.setAttribute("y", 31);
    label.setAttribute("text-anchor", "middle");
    label.textContent = offset === 0 ? "UTC" : formatOffset(offset).replace("UTC", "");

    group.append(rect, label);
    layer.appendChild(group);
  });
}

function updateZoneClasses() {
  document.querySelectorAll(".zone-band").forEach((node) => {
    const offset = Number(node.dataset.offset);
    const active = state.selectedOffset === offset;
    node.classList.toggle("active", active);
    node.setAttribute("opacity", active ? ".36" : ".012");
  });
}

function toggleOffset(offset) {
  state.selectedOffset = state.selectedOffset === offset ? null : offset;
  state.selectedCity = null;
  state.searchCity = null;
  render();
}

function selectCity(city) {
  state.selectedOffset = city.offset;
  state.selectedCity = city.name;
  state.searchCity = city.name;
  render();
}

function renderCityLayer() {
  const layer = $("cityLayer");
  const visible = new Set(filteredCities().map((city) => city.name));
  const query = $("search").value.trim();
  layer.innerHTML = "";

  ALL_CITIES.forEach((city) => {
    const hiddenBySearch = query && !visible.has(city.name);
    const inSelectedZone = state.selectedOffset === city.offset;
    const isSelectedCity = city.name === state.selectedCity || city.name === state.searchCity;
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "city",
      city.name === "台北" ? "home" : "",
      hiddenBySearch ? "hidden" : "",
      state.selectedOffset !== null && !inSelectedZone ? "dim" : "",
      inSelectedZone ? "zone-active" : "",
      isSelectedCity ? "search-active" : ""
    ].filter(Boolean).join(" ");
    button.style.left = `${city.x}%`;
    button.style.top = `${city.y}%`;
    button.setAttribute("aria-label", `${city.name} ${formatOffset(city.offset)}`);
    button.innerHTML = `
      <span class="dot" aria-hidden="true"></span>
      <span class="city-label"><strong>${city.flag} ${city.name}</strong><small>${formatOffset(city.offset)}</small></span>
    `;
    button.addEventListener("click", () => selectCity(city));
    layer.appendChild(button);
  });
}

function renderHeader() {
  const date = currentDate();
  $("utcNow").textContent = formatUtc(date);
  $("utcDate").textContent = `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

function renderSummary() {
  const summary = $("selectionSummary");
  const status = $("statusText");
  if (state.selectedCity) {
    const city = ALL_CITIES.find((item) => item.name === state.selectedCity);
    if (city) {
      summary.textContent = `${city.name}｜${city.country}｜${formatOffset(city.offset)} 已高亮`;
      status.textContent = `目前高亮：${city.flag} ${city.name}（${city.en}），同 UTC 色帶城市同步標示。`;
      return;
    }
  }
  if (state.selectedOffset !== null) {
    const count = ALL_CITIES.filter((city) => city.offset === state.selectedOffset).length;
    summary.textContent = `${formatOffset(state.selectedOffset)}｜${count} 個城市已高亮`;
    status.textContent = `目前選取 ${formatOffset(state.selectedOffset)}，同一時區城市已於地圖和清單高亮。`;
    return;
  }
  summary.textContent = "點選 UTC 色帶，或搜尋城市自動高亮";
  status.textContent = "時間依瀏覽器內建 IANA 時區資料計算。";
}

function renderCards() {
  const date = currentDate();
  const root = $("continentCards");
  const visible = new Set(filteredCities().map((city) => city.name));
  root.innerHTML = "";

  CONTINENTS.forEach((continent) => {
    const visibleCountries = continent.countries.map((country) => ({
      ...country,
      cities: country.cities.filter((city) => visible.has(city.name))
    })).filter((country) => country.cities.length);

    if (!visibleCountries.length) return;

    const section = document.createElement("section");
    section.className = "continent-card";
    section.style.setProperty("--card-a", continent.colors[0]);
    section.style.setProperty("--card-b", continent.colors[1]);
    section.innerHTML = `
      <h2>${continent.title} <small>${continent.en}</small></h2>
      <div class="country-grid"></div>
    `;
    const grid = section.querySelector(".country-grid");

    visibleCountries.forEach((country) => {
      const countryBox = document.createElement("article");
      countryBox.className = "country-box";
      countryBox.innerHTML = `
        <h3>${country.flag} ${country.country} <small>${country.en}</small></h3>
        <div class="city-list"></div>
      `;
      const list = countryBox.querySelector(".city-list");

      country.cities.forEach((city) => {
        const fullCity = ALL_CITIES.find((item) => item.name === city.name);
        const formatted = formatInZone(date, city.timeZone);
        const inSelectedZone = state.selectedOffset === city.offset;
        const isSelectedCity = state.selectedCity === city.name || state.searchCity === city.name;
        const row = document.createElement("button");
        row.type = "button";
        row.className = [
          "city-row",
          inSelectedZone ? "zone-row" : "",
          isSelectedCity ? "search-row" : "",
          state.selectedOffset !== null && !inSelectedZone ? "dim-row" : ""
        ].filter(Boolean).join(" ");
        row.innerHTML = `
          <span class="row-city">${city.name}</span>
          <span class="row-time">${formatted.time}${dateDiffTag(date, city.timeZone)}</span>
          <span class="row-utc">${formatted.offset}<small>${formatOffset(city.offset)}</small></span>
        `;
        row.addEventListener("click", () => selectCity(fullCity));
        list.appendChild(row);
      });

      grid.appendChild(countryBox);
    });

    root.appendChild(section);
  });

  if (!root.children.length) {
    root.innerHTML = `<section class="empty-card"><h2>找不到符合條件的城市</h2><p>請更換搜尋關鍵字，或清除搜尋。</p></section>`;
  }
}

function setMode(mode) {
  state.mode = mode;
  $("liveBtn").classList.toggle("active", mode === "live");
  $("convertBtn").classList.toggle("active", mode === "convert");
  render();
}

function clearFilters() {
  $("search").value = "";
  state.selectedOffset = null;
  state.selectedCity = null;
  state.searchCity = null;
  render();
}

function render() {
  updateZoneClasses();
  renderHeader();
  renderCityLayer();
  renderSummary();
  renderCards();
}

function bindEvents() {
  $("liveBtn").addEventListener("click", () => setMode("live"));
  $("convertBtn").addEventListener("click", () => setMode("convert"));
  $("baseTime").addEventListener("input", () => setMode("convert"));
  $("clearSearchBtn").addEventListener("click", clearFilters);
  $("search").addEventListener("input", () => {
    applySearchSelection();
    render();
  });
  $("mode24").addEventListener("click", () => {
    state.is24 = !state.is24;
    $("mode24").textContent = state.is24 ? "24h" : "12h";
    render();
  });
}

initDateInput();
renderZones();
bindEvents();
render();

setInterval(() => {
  if (state.mode === "live") render();
  else renderHeader();
}, 1000);
