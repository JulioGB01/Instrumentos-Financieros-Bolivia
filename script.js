const CATEGORY_LABELS = {
    alternativos: "Alternativos",
    fondos: "Fondos de inversión",
    soberanos: "Soberanos / BCB",
    corporativos: "Bonos corporativos",
    dpf: "Depósitos a plazo"
};

const RISK_ORDER = {
    "Muy bajo": 1,
    "Bajo": 2,
    "Moderado": 3,
    "Alto": 4,
    "Muy alto": 5
};

const instruments = [
    {
        name: "Vaka – Ganadería Bovina",
        category: "alternativos",
        currency: "BOB",
        yieldLabel: "11%–17%",
        yieldMax: 17,
        source: "Vaka",
        term: "2–14 meses",
        risk: "Alto",
        riskDetail: "Exposición biológica y de mercado."
    },
    {
        name: "Afluenta – Préstamos P2P",
        category: "alternativos",
        currency: "BOB",
        yieldLabel: "10%–15%",
        yieldMax: 15,
        source: "Afluenta",
        term: "Según préstamo",
        risk: "Alto",
        riskDetail: "Riesgo crediticio; rendimiento neto de mora."
    },
    {
        name: "Factoring – Anticipo de Facturas",
        category: "alternativos",
        currency: "BOB",
        yieldLabel: "9%–14%",
        yieldMax: 14,
        source: "RedCapital / Facturedo",
        term: "30–180 días",
        risk: "Alto",
        riskDetail: "Exposición al impago del deudor."
    },
    {
        name: "Fortaleza SAFI – Fondo UFV Rendimiento Total",
        category: "fondos",
        currency: "UFV",
        yieldLabel: "13,22%",
        yieldMax: 13.22,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Calificación AA1."
    },
    {
        name: "SNA – Opción Fondo de Inversión MP",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "11,57%",
        yieldMax: 11.57,
        source: "BBV",
        term: "30 días",
        risk: "Bajo",
        riskDetail: "Mediano plazo; calificación AA3."
    },
    {
        name: "Préstamo Privado Estructurado – Direct Lending",
        category: "alternativos",
        currency: "USD",
        yieldLabel: "11,00% fijo",
        yieldMax: 11,
        source: "Contratos privados",
        term: "Mínimo 1 año",
        risk: "Muy alto",
        riskDetail: "Capital no garantizado; instrumento no regulado."
    },
    {
        name: "Frak – Inversión Inmobiliaria Fraccionada",
        category: "alternativos",
        currency: "BOB",
        yieldLabel: "10%–10,9%",
        yieldMax: 10.9,
        source: "Frak",
        term: "12 meses",
        risk: "Moderado",
        riskDetail: "Desarrollo inmobiliario; mínimo Bs 1.500."
    },
    {
        name: "Bonos del Tesoro – TGN",
        category: "soberanos",
        currency: "BOB",
        yieldLabel: "10,71%–10,73%",
        yieldMax: 10.73,
        source: "BBV",
        term: "361–1.080 días",
        risk: "Bajo",
        riskDetail: "Emisor soberano."
    },
    {
        name: "Fortaleza SAFI – Fondo Porvenir",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "10,26%",
        yieldMax: 10.26,
        source: "Fortaleza SAFI",
        term: "30 días",
        risk: "Bajo",
        riskDetail: "Calificación AA1."
    },
    {
        name: "Letras de Regulación Monetaria – BCB",
        category: "soberanos",
        currency: "BOB",
        yieldLabel: "10,37%–10,44%",
        yieldMax: 10.44,
        source: "BBV",
        term: "271–360 días",
        risk: "Bajo",
        riskDetail: "Emisor estatal y alta liquidez."
    },
    {
        name: "Crowdfunding Inmobiliario",
        category: "alternativos",
        currency: "USD",
        yieldLabel: "7%–10%",
        yieldMax: 10,
        source: "Propitec / Fraccional",
        term: "1–3 años",
        risk: "Moderado",
        riskDetail: "Exposición a proyectos inmobiliarios."
    },
    {
        name: "Bonos de Largo Plazo – EMT",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "9,10%",
        yieldMax: 9.1,
        source: "BBV",
        term: "Más de 1.080 días",
        risk: "Moderado",
        riskDetail: "Emisor de primera línea."
    },
    {
        name: "Bisa SAFI – Elite FIA CP",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "8,56%",
        yieldMax: 8.56,
        source: "Bisa SAFI",
        term: "30 días",
        risk: "Bajo",
        riskDetail: "Fondo abierto de corto plazo; AA1."
    },
    {
        name: "Depósitos a Plazo Fijo – BME, BEC",
        category: "dpf",
        currency: "BOB",
        yieldLabel: "7,82%–8,00%",
        yieldMax: 8,
        source: "BME / BEC",
        term: "1–180 días",
        risk: "Muy bajo",
        riskDetail: "Producto bancario."
    },
    {
        name: "DPF Reporto – FIE",
        category: "dpf",
        currency: "BOB",
        yieldLabel: "7,55%",
        yieldMax: 7.55,
        source: "FIE",
        term: "Muy corto",
        risk: "Muy bajo",
        riskDetail: "Operación de reporto bursátil; máximo observado."
    },
    {
        name: "Bisa SAFI – UFV Protección",
        category: "fondos",
        currency: "UFV",
        yieldLabel: "7,43%",
        yieldMax: 7.43,
        source: "Bisa SAFI",
        term: "30 días",
        risk: "Bajo",
        riskDetail: "Fondo abierto ajustado por variación UFV."
    },
    {
        name: "SME – Previsor Fondo Mutuo LP",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "7,06%",
        yieldMax: 7.06,
        source: "BBV",
        term: "30 días",
        risk: "Bajo",
        riskDetail: "Calificación AA2."
    },
    {
        name: "Fortaleza SAFI – Fondo Potencia Bolivianos",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "6,94%",
        yieldMax: 6.94,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Calificación AA2."
    },
    {
        name: "Bonos Grupo Nacional Vida I – Emisión 2",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "6,75% fijo",
        yieldMax: 6.75,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición al sector seguros."
    },
    {
        name: "Fortaleza SAFI – Fondo Disponible",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "6,58%",
        yieldMax: 6.58,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Corto plazo; calificación AA1."
    },
    {
        name: "Bonos Nutrioil II – Emisión 2",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "6,30% fijo",
        yieldMax: 6.3,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición al sector agroindustrial."
    },
    {
        name: "Fortaleza SAFI – Fondo Planifica",
        category: "fondos",
        currency: "UFV",
        yieldLabel: "6,28%",
        yieldMax: 6.28,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Calificación AA1."
    },
    {
        name: "Bonos Participativos Industria Textil TSM",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "6,00% + var. (hasta 7,00%)",
        yieldMax: 7,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Sector textil; incluye componente variable."
    },
    {
        name: "Fortaleza SAFI – Fondo Produce Ganancia",
        category: "fondos",
        currency: "USD",
        yieldLabel: "5,88%",
        yieldMax: 5.88,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Corto plazo; calificación AA1."
    },
    {
        name: "Bonos Ferroviaria Oriental – Emisión 6",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "5,80% fijo",
        yieldMax: 5.8,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición al transporte ferroviario."
    },
    {
        name: "Bonos COBEE V",
        category: "corporativos",
        currency: "USD",
        yieldLabel: "5,75% fijo",
        yieldMax: 5.75,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición al sector hidroeléctrico."
    },
    {
        name: "Bonos SOBOCE VIII – Emisión 1",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "5,70% fijo",
        yieldMax: 5.7,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición a cemento e industria."
    },
    {
        name: "Bonos ENDE Transmisión",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "5,30%–5,70%",
        yieldMax: 5.7,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Empresa estatal del sector eléctrico."
    },
    {
        name: "Bonos Industrias de Aceite",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "5,50%–6,00% fijo",
        yieldMax: 6,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición a alimentos y oleaginosas."
    },
    {
        name: "Fortaleza SAFI – Fondo Avanza BS",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "5,44%",
        yieldMax: 5.44,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Calificación AA2."
    },
    {
        name: "Bonos INCOTEC",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "5,00%–6,00% fijo",
        yieldMax: 6,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición al sector ingeniería."
    },
    {
        name: "Bonos Gas & Electricidad II",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "4,00%–5,25% fijo",
        yieldMax: 5.25,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Exposición a generación eléctrica."
    },
    {
        name: "Bisa SAFI – Proyección FIA LP",
        category: "fondos",
        currency: "BOB",
        yieldLabel: "4,93%",
        yieldMax: 4.93,
        source: "Bisa SAFI",
        term: "30 días",
        risk: "Bajo",
        riskDetail: "Fondo abierto de largo plazo."
    },
    {
        name: "Depósitos a Plazo Fijo – USD",
        category: "dpf",
        currency: "USD",
        yieldLabel: "4,00%–5,00%",
        yieldMax: 5,
        source: "ASFI",
        term: "Plazo bancario",
        risk: "Muy bajo",
        riskDetail: "Producto bancario en dólares."
    },
    {
        name: "Fortaleza SAFI – Fondo Interés+",
        category: "fondos",
        currency: "USD",
        yieldLabel: "0,32%",
        yieldMax: 0.32,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Muy bajo",
        riskDetail: "Perfil conservador; calificación AA1."
    },
    {
        name: "Bonos Prolega III",
        category: "corporativos",
        currency: "USD",
        yieldLabel: "4,20% fijo",
        yieldMax: 4.2,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Sector oleaginosas; emisión en dólares."
    },
    {
        name: "Bonos Clínica Metropolitana de las Américas",
        category: "corporativos",
        currency: "BOB",
        yieldLabel: "4,00% inicial; luego 7,50%",
        yieldMax: 7.5,
        source: "BBV",
        term: "Largo plazo",
        risk: "Moderado",
        riskDetail: "Tasa escalonada; exposición al sector salud."
    },
    {
        name: "Bonos Soberanos 1 Año – USD",
        category: "soberanos",
        currency: "USD",
        yieldLabel: "3,50%–4,20%",
        yieldMax: 4.2,
        source: "BCB / BBV",
        term: "1 año",
        risk: "Bajo",
        riskDetail: "Emisor soberano; liquidez moderada."
    },
    {
        name: "Bisa SAFI – Premier FIA CP",
        category: "fondos",
        currency: "USD",
        yieldLabel: "0,14%",
        yieldMax: 0.14,
        source: "Bisa SAFI",
        term: "360 días",
        risk: "Muy bajo",
        riskDetail: "Fondo de corto plazo en dólares."
    },
    {
        name: "Fortaleza SAFI – Fondo Inversión Internacional",
        category: "fondos",
        currency: "USD",
        yieldLabel: "0,67%",
        yieldMax: 0.67,
        source: "Fortaleza SAFI",
        term: "360 días",
        risk: "Bajo",
        riskDetail: "Inversión en el exterior."
    }
];

const tableBody = document.querySelector("#instrument-table-body");
const resultsCount = document.querySelector("#results-count");
const searchInput = document.querySelector("#instrument-search");
const sortSelect = document.querySelector("#sort-by");
const filterButtons = [...document.querySelectorAll(".filter-button")];

const state = {
    category: "todos",
    query: "",
    sort: "yield-desc"
};

function normalizeText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function riskClass(risk) {
    return normalizeText(risk).replaceAll(" ", "-");
}

function getVisibleInstruments() {
    const query = normalizeText(state.query.trim());

    const filtered = instruments.filter((instrument) => {
        const matchesCategory = state.category === "todos" || instrument.category === state.category;
        const searchableText = normalizeText([
            instrument.name,
            CATEGORY_LABELS[instrument.category],
            instrument.currency,
            instrument.source,
            instrument.term,
            instrument.risk,
            instrument.riskDetail
        ].join(" "));

        return matchesCategory && (!query || searchableText.includes(query));
    });

    return filtered.sort((a, b) => {
        if (state.sort === "yield-asc") return a.yieldMax - b.yieldMax;
        if (state.sort === "name-asc") return a.name.localeCompare(b.name, "es");
        if (state.sort === "risk-asc") {
            return (RISK_ORDER[a.risk] - RISK_ORDER[b.risk]) || (b.yieldMax - a.yieldMax);
        }
        return b.yieldMax - a.yieldMax;
    });
}

function rowTemplate(instrument) {
    return `
        <tr>
            <td>
                <span class="instrument-name">${escapeHtml(instrument.name)}</span>
                <span class="category-label">${escapeHtml(CATEGORY_LABELS[instrument.category])}</span>
            </td>
            <td><span class="currency-label">${escapeHtml(instrument.currency)}</span></td>
            <td class="yield-cell"><span class="yield-value">${escapeHtml(instrument.yieldLabel)}</span></td>
            <td>${escapeHtml(instrument.term)}</td>
            <td>
                <span class="risk-label risk-label--${riskClass(instrument.risk)}">${escapeHtml(instrument.risk)}</span>
                <span class="risk-detail">${escapeHtml(instrument.riskDetail)}</span>
            </td>
            <td><span class="source-name">${escapeHtml(instrument.source)}</span></td>
        </tr>
    `;
}

function render() {
    const visibleInstruments = getVisibleInstruments();

    tableBody.innerHTML = visibleInstruments.length
        ? visibleInstruments.map(rowTemplate).join("")
        : `<tr class="empty-row"><td colspan="6">No se encontraron instrumentos con estos criterios.</td></tr>`;

    const label = visibleInstruments.length === 1 ? "instrumento" : "instrumentos";
    resultsCount.textContent = `${visibleInstruments.length} ${label} en esta vista`;
}

function updateSummary() {
    document.querySelector("#instrument-count").textContent = instruments.length;
    document.querySelector("#category-count").textContent = new Set(instruments.map((item) => item.category)).size;
    document.querySelector("#currency-count").textContent = new Set(instruments.map((item) => item.currency)).size;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        state.category = button.dataset.category;

        filterButtons.forEach((filterButton) => {
            const isActive = filterButton === button;
            filterButton.classList.toggle("is-active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
        });

        render();
    });
});

searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
});

sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
});

updateSummary();
render();
