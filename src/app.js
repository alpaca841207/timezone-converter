const MAP_WIDTH = 1536;
const MAP_HEIGHT = 828;

const ZONE_OFFSETS = [
  -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
  0, 1, 2, 3, 3.5, 4, 5, 5.5, 6, 7, 8, 9, 9.5, 10, 11, 12, 13, 14
];

const CITY_GROUPS = [
  {
    key: "americas-north",
    title: "美洲（北美）",
    colors: ["#ff8b8b", "#ffd0a1"],
    cities: [
      ["🇺🇸", "檀香山", "Honolulu", "Pacific/Honolulu", -10, 8.8, 45.9],
      ["🇺🇸", "安克拉治", "Anchorage", "America/Anchorage", -9, 10.9, 21.9],
      ["🇨🇦", "溫哥華", "Vancouver", "America/Vancouver", -8, 17.9, 29.1],
      ["🇺🇸", "西雅圖", "Seattle", "America/Los_Angeles", -8, 18.1, 30.1],
      ["🇺🇸", "舊金山", "San Francisco", "America/Los_Angeles", -8, 18, 36],
      ["🇺🇸", "洛杉磯", "Los Angeles", "America/Los_Angeles", -8, 19.1, 38.2],
      ["🇺🇸", "鳳凰城", "Phoenix", "America/Phoenix", -7, 20.7, 38.6],
      ["🇺🇸", "丹佛", "Denver", "America/Denver", -7, 22.6, 34.8],
      ["🇺🇸", "芝加哥", "Chicago", "America/Chicago", -6, 27.1, 33.5],
      ["🇺🇸", "達拉斯", "Dallas", "America/Chicago", -6, 24.7, 39],
      ["🇨🇦", "多倫多", "Toronto", "America/Toronto", -5, 29.3, 32.5],
      ["🇺🇸", "紐約", "New York", "America/New_York", -5, 30.7, 34.2],
      ["🇨🇦", "哈利法克斯", "Halifax", "America/Halifax", -4, 33.4, 31.8]
    ]
  },
  {
    key: "americas-south",
    title: "美洲（中南美洲）",
    colors: ["#ffcf6e", "#ff9f6e"],
    cities: [
      ["🇲🇽", "墨西哥城", "Mexico City", "America/Mexico_City", -6, 24.1, 47.1],
      ["🇵🇦", "巴拿馬城", "Panama City", "America/Panama", -5, 29.2, 53.4],
      ["🇵🇪", "利馬", "Lima", "America/Lima", -5, 29.9, 66.1],
      ["🇻🇪", "卡拉卡斯", "Caracas", "America/Caracas", -4, 32.5, 52.5],
      ["🇨🇱", "聖地牙哥", "Santiago", "America/Santiago", -4, 31.5, 79],
      ["🇧🇷", "里約", "Rio de Janeiro", "America/Sao_Paulo", -3, 38.7, 72.6],
      ["🇧🇷", "聖保羅", "São Paulo", "America/Sao_Paulo", -3, 37.8, 73],
      ["🇦🇷", "布宜諾斯艾利斯", "Buenos Aires", "America/Argentina/Buenos_Aires", -3, 34.8, 79.7]
    ]
  },
  {
    key: "europe-africa",
    title: "歐洲 / 非洲",
    colors: ["#9ff0a8", "#78d8ff"],
    cities: [
      ["🇮🇸", "雷克雅維克", "Reykjavik", "Atlantic/Reykjavik", 0, 44.3, 20.1],
      ["🇬🇧", "倫敦", "London", "Europe/London", 0, 50, 27.7],
      ["🇮🇪", "都柏林", "Dublin", "Europe/Dublin", 0, 48.4, 26.6],
      ["🇵🇹", "里斯本", "Lisbon", "Europe/Lisbon", 0, 47.6, 35.4],
      ["🇲🇦", "卡薩布蘭卡", "Casablanca", "Africa/Casablanca", 1, 48, 38.5],
      ["🇪🇸", "馬德里", "Madrid", "Europe/Madrid", 1, 49, 34.4],
      ["🇫🇷", "巴黎", "Paris", "Europe/Paris", 1, 50.6, 29.3],
      ["🇩🇪", "柏林", "Berlin", "Europe/Berlin", 1, 53.5, 27.1],
      ["🇮🇹", "羅馬", "Rome", "Europe/Rome", 1, 53.3, 33.5],
      ["🇸🇪", "斯德哥爾摩", "Stockholm", "Europe/Stockholm", 1, 54.7, 23],
      ["🇳🇬", "拉哥斯", "Lagos", "Africa/Lagos", 1, 50.9, 54.9],
      ["🇿🇦", "開普敦", "Cape Town", "Africa/Johannesburg", 2, 54.8, 79.3],
      ["🇬🇷", "雅典", "Athens", "Europe/Athens", 2, 56.2, 35.9],
      ["🇪🇬", "開羅", "Cairo", "Africa/Cairo", 2, 58.2, 40.7],
      ["🇰🇪", "奈洛比", "Nairobi", "Africa/Nairobi", 3, 59.6, 59.6],
      ["🇹🇷", "伊斯坦堡", "Istanbul", "Europe/Istanbul", 3, 57.6, 34],
      ["🇷🇺", "莫斯科", "Moscow", "Europe/Moscow", 3, 59.8, 25.1]
    ]
  },
  {
    key: "middle-east-asia",
    title: "中東 / 亞洲",
    colors: ["#86e7ff", "#9aa7ff"],
    cities: [
      ["🇸🇦", "利雅德", "Riyadh", "Asia/Riyadh", 3, 62.2, 43.9],
      ["🇮🇷", "德黑蘭", "Tehran", "Asia/Tehran", 3.5, 63.4, 37.3],
      ["🇦🇪", "杜拜", "Dubai", "Asia/Dubai", 4, 64.4, 43.6],
      ["🇦🇿", "巴庫", "Baku", "Asia/Baku", 4, 63, 34.4],
      ["🇵🇰", "喀拉蚩", "Karachi", "Asia/Karachi", 5, 67.5, 43.8],
      ["🇺🇿", "塔什干", "Tashkent", "Asia/Tashkent", 5, 68.1, 33.9],
      ["🇮🇳", "孟買", "Mumbai", "Asia/Kolkata", 5.5, 69, 47.3],
      ["🇮🇳", "新德里", "New Delhi", "Asia/Kolkata", 5.5, 70.2, 41.5],
      ["🇧🇩", "達卡", "Dhaka", "Asia/Dhaka", 6, 73.6, 44.4],
      ["🇰🇿", "阿拉木圖", "Almaty", "Asia/Almaty", 6, 70.1, 32.7],
      ["🇹🇭", "曼谷", "Bangkok", "Asia/Bangkok", 7, 76.2, 50.5],
      ["🇻🇳", "胡志明市", "Ho Chi Minh City", "Asia/Ho_Chi_Minh", 7, 77.8, 52.3],
      ["🇮🇩", "雅加達", "Jakarta", "Asia/Jakarta", 7, 77.9, 62.5],
      ["🇲🇾", "吉隆坡", "Kuala Lumpur", "Asia/Kuala_Lumpur", 8, 76.6, 56.9],
      ["🇸🇬", "新加坡", "Singapore", "Asia/Singapore", 8, 77.1, 58],
      ["🇵🇭", "馬尼拉", "Manila", "Asia/Manila", 8, 81.6, 50],
      ["🇹🇼", "台北", "Taipei", "Asia/Taipei", 8, 81.7, 43.7],
      ["🇭🇰", "香港", "Hong Kong", "Asia/Hong_Kong", 8, 79.8, 45.3],
      ["🇨🇳", "上海", "Shanghai", "Asia/Shanghai", 8, 81.7, 39.9],
      ["🇨🇳", "北京", "Beijing", "Asia/Shanghai", 8, 80.4, 34.7],
      ["🇰🇷", "首爾", "Seoul", "Asia/Seoul", 9, 83.2, 36.1],
      ["🇯🇵", "東京", "Tokyo", "Asia/Tokyo", 9, 86.5, 37.3]
    ]
  },
  {
    key: "oceania",
    title: "大洋洲",
    colors: ["#c7a4ff", "#8ff4ff"],
    cities: [
      ["🇦🇺", "柏斯", "Perth", "Australia/Perth", 8, 80.3, 78.1],
      ["🇦🇺", "達爾文", "Darwin", "Australia/Darwin", 9.5, 84.2, 66.3],
      ["🇦🇺", "布里斯本", "Brisbane", "Australia/Brisbane", 10, 90, 75.4],
      ["🇦🇺", "雪梨", "Sydney", "Australia/Sydney", 10, 89.5, 79.2],
      ["🇦🇺", "墨爾本", "Melbourne", "Australia/Melbourne", 10, 87.9, 81.6],
      ["🇵🇬", "莫士比港", "Port Moresby", "Pacific/Port_Moresby", 10, 88.4, 64.5],
      ["🇳🇨", "努美阿", "Nouméa", "Pacific/Noumea", 11, 93.5, 72.2],
      ["🇫🇯", "蘇瓦", "Suva", "Pacific/Fiji", 12, 96.6, 69.7],
      ["🇳🇿", "奧克蘭", "Auckland", "Pacific/Auckland", 12, 95.6, 81],
      ["🇼🇸", "阿皮亞", "Apia", "Pacific/Apia", 13, 5.2, 67.2],
      ["🇰🇮", "聖誕島", "Kiritimati", "Pacific/Kiritimati", 14, 8.9, 57.7]
    ]
  }
];

const ALL_CITIES = CITY_GROUPS.flatMap((group) =>
  group.cities.map((city) => ({
    flag: city[0],
    name: city[1],
    en: city[2],
    timeZone: city[3],
    offset: city[4],
    x: city[5],
    y: city[6],
    groupKey: group.key,
    groupTitle: group.title
  }))
);

const state = {
  mode: "live",
  is24: true,
  selectedOffset: null,
  selectedCity: null
};

const $ = (id) => document.getElementById(id);

function pad(n) {
  return String(n).padStart(2, "0");
}

function formatOffset(offset) {
  const sign = offset >= 0 ? "+" : "-";
  const abs = Math.abs(offset);
  const hours = Math.trunc(abs);
  const minutes = Math.round((abs - hours) * 60);
  return `UTC${sign}${hours}${minutes ? ":" + pad(minutes) : ""}`;
}

function offsetToken(offset) {
  return String(offset).replace(".", "_").replace("-", "m");
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
    new Intl.DateTimeFormat("zh-TW", options)
      .formatToParts(date)
      .map((part) => [part.type, part.value])
  );

  const time = state.is24
    ? `${parts.hour}:${parts.minute}${withSeconds ? ":" + parts.second : ""}`
    : `${parts.dayPeriod || ""} ${parts.hour}:${parts.minute}`.trim();

  return {
    time,
    ymd: `${parts.year}-${parts.month}-${parts.day}`,
    offset: parts.timeZoneName || ""
  };
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
  return `<span class="next-day">(${diff > 0 ? "+" : ""}${diff}日)</span>`;
}

function normalize(text) {
  return String(text).toLowerCase().replace(/\s+/g, "");
}

function cityMatches(city, query) {
  if (!query) return true;
  const q = normalize(query);
  const haystack = [
    city.name,
    city.en,
    city.timeZone,
    city.groupTitle,
    formatOffset(city.offset),
    `utc${city.offset >= 0 ? "+" : ""}${city.offset}`,
    `utc${city.offset >= 0 ? "+" : ""}${String(city.offset).replace(".5", ":30")}`
  ].map(normalize).join("|");
  return haystack.includes(q);
}

function filteredCities() {
  const query = $("search").value.trim();
  return ALL_CITIES.filter((city) => cityMatches(city, query));
}

function renderZones() {
  const layer = $("zoneLayer");
  const guideLayer = $("zoneGuideLayer");
  layer.innerHTML = "";
  if (guideLayer) guideLayer.innerHTML = "";

  const width = MAP_WIDTH / ZONE_OFFSETS.length;

  ZONE_OFFSETS.forEach((offset, index) => {
    const x = index * width;
    const hue = (index / ZONE_OFFSETS.length) * 320 + 22;
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "zone-click-group");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("class", "zone-band");
    rect.setAttribute("x", x);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", width + 1);
    rect.setAttribute("height", MAP_HEIGHT);
    rect.setAttribute("fill", `hsl(${hue} 88% 55%)`);
    rect.setAttribute("opacity", ".02");
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

    const topLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    topLabel.setAttribute("class", "zone-label");
    topLabel.setAttribute("x", x + width / 2);
    topLabel.setAttribute("y", 42);
    topLabel.setAttribute("text-anchor", "middle");
    topLabel.textContent = formatOffset(offset).replace("UTC", "");

    const bottomLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    bottomLabel.setAttribute("class", "zone-label bottom-zone-label");
    bottomLabel.setAttribute("x", x + width / 2);
    bottomLabel.setAttribute("y", MAP_HEIGHT - 22);
    bottomLabel.setAttribute("text-anchor", "middle");
    bottomLabel.textContent = formatOffset(offset).replace("UTC", "");

    group.append(rect, topLabel, bottomLabel);
    layer.appendChild(group);

    if (guideLayer) {
      const boundary = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const wobble = (index % 5 - 2) * 5;
      const ySteps = [0, 84, 142, 232, 312, 410, 520, 612, 708, MAP_HEIGHT];
      const d = ySteps.map((y, step) => {
        const shift = step === 0 || step === ySteps.length - 1 ? 0 : ((step % 2 ? 1 : -1) * (8 + Math.abs(wobble)));
        return `${step === 0 ? "M" : "L"}${(x + shift).toFixed(1)} ${y}`;
      }).join(" ");
      boundary.setAttribute("d", d);
      boundary.setAttribute("class", "zone-boundary");
      guideLayer.appendChild(boundary);
    }
  });
}

function updateZoneClasses() {
  document.querySelectorAll(".zone-band").forEach((node) => {
    const offset = Number(node.dataset.offset);
    node.classList.toggle("active", state.selectedOffset === offset);
    node.setAttribute("opacity", state.selectedOffset === offset ? ".34" : ".02");
  });
}

function toggleOffset(offset) {
  state.selectedOffset = state.selectedOffset === offset ? null : offset;
  state.selectedCity = null;
  render();
}

function selectCity(city) {
  state.selectedOffset = city.offset;
  state.selectedCity = city.name;
  render();
}

function renderCityLayer() {
  const layer = $("cityLayer");
  const cities = filteredCities();
  const visibleNames = new Set(cities.map((city) => city.name));
  layer.innerHTML = "";

  ALL_CITIES.forEach((city) => {
    const div = document.createElement("button");
    div.type = "button";
    const inSelectedZone = state.selectedOffset === city.offset;
    const hidden = !visibleNames.has(city.name);
    div.className = [
      "city",
      city.name === "台北" ? "home" : "",
      hidden ? "hidden" : "",
      state.selectedOffset !== null && !inSelectedZone ? "dim" : "",
      inSelectedZone ? "zone-active" : ""
    ].filter(Boolean).join(" ");
    div.style.left = `${city.x}%`;
    div.style.top = `${city.y}%`;
    div.setAttribute("aria-label", `${city.name}，${formatOffset(city.offset)}`);
    div.innerHTML = `
      <span class="dot" aria-hidden="true"></span>
      <span class="city-label">${city.flag} ${city.name}<small> ${formatOffset(city.offset).replace("UTC", "")}</small></span>
    `;
    div.addEventListener("click", () => selectCity(city));
    layer.appendChild(div);
  });
}

function renderHeader() {
  const now = new Date();
  const date = currentDate();
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local";

  $("localNow").textContent = formatInZone(now, localTimeZone, true).time;
  $("localZone").textContent = localTimeZone;
  $("utcNow").textContent = formatUtc(date);
  $("utcDate").textContent = `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

function renderSelectionSummary() {
  const summary = $("selectionSummary");
  const card = $("selectedZoneCard");
  const selectedCities = ALL_CITIES.filter((city) => city.offset === state.selectedOffset);

  if (state.selectedOffset === null) {
    summary.textContent = "尚未選取時區：顯示全部城市";
    card.textContent = "尚未選取，點選地圖色帶查看該區城市。";
    return;
  }

  const zoneName = formatOffset(state.selectedOffset);
  summary.textContent = `${zoneName}｜${selectedCities.length} 個主要城市已高亮`;

  if (!selectedCities.length) {
    card.innerHTML = `<strong>${zoneName}</strong><br>目前清單內尚未列出這個 UTC 區的主要城市。`;
    return;
  }

  const chips = selectedCities
    .map((city) => `<span class="city-chip">${city.flag} ${city.name}</span>`)
    .join("");

  card.innerHTML = `
    <div>
      <strong>${zoneName}</strong> 已高亮 ${selectedCities.length} 個主要城市。
      <div class="city-chip-list">${chips}</div>
    </div>
  `;
}

function renderTables() {
  const date = currentDate();
  const root = $("tables");
  const visible = new Set(filteredCities().map((city) => city.name));
  root.innerHTML = "";

  CITY_GROUPS.forEach((group) => {
    const rows = group.cities
      .map((city) => ({
        flag: city[0],
        name: city[1],
        en: city[2],
        timeZone: city[3],
        offset: city[4]
      }))
      .filter((city) => visible.has(city.name));

    if (!rows.length) return;

    const section = document.createElement("section");
    section.className = "card";
    section.style.setProperty("--card-a", group.colors[0]);
    section.style.setProperty("--card-b", group.colors[1]);
    section.innerHTML = `
      <h3>${group.title}</h3>
      <table>
        <thead>
          <tr><th>城市</th><th>時間</th><th>UTC</th></tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    const tbody = section.querySelector("tbody");

    rows.forEach((city) => {
      const formatted = formatInZone(date, city.timeZone);
      const inSelectedZone = state.selectedOffset === city.offset;
      const row = document.createElement("tr");
      row.className = [
        city.name === "台北" ? "home-row" : "",
        inSelectedZone ? "zone-row" : "",
        state.selectedOffset !== null && !inSelectedZone ? "dimrow" : ""
      ].filter(Boolean).join(" ");
      row.innerHTML = `
        <td><span class="city-name">${city.flag} ${city.name}</span></td>
        <td class="time-cell">${formatted.time}${dateDiffTag(date, city.timeZone)}</td>
        <td class="offset-cell">${formatted.offset}<br><small>${formatOffset(city.offset)}</small></td>
      `;
      tbody.appendChild(row);
    });

    root.appendChild(section);
  });

  if (!root.children.length) {
    root.innerHTML = `<section class="panel"><h2>找不到符合條件的城市</h2><p class="muted">請更換搜尋關鍵字，或按「清除篩選」。</p></section>`;
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
  render();
}

function render() {
  updateZoneClasses();
  renderHeader();
  renderCityLayer();
  renderSelectionSummary();
  renderTables();
}

function bindEvents() {
  $("liveBtn").addEventListener("click", () => setMode("live"));
  $("convertBtn").addEventListener("click", () => setMode("convert"));
  $("baseTime").addEventListener("input", () => setMode("convert"));
  $("search").addEventListener("input", render);
  $("clearBtn").addEventListener("click", clearFilters);
  $("mode24").addEventListener("click", () => {
    state.is24 = !state.is24;
    $("mode24").textContent = state.is24 ? "24 小時制" : "12 小時制";
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
