import React from 'react';

export default function Home() {
  // Data Service Internal - Silakan ubah URL sesuai dengan server Anda
  const servicesData = [
    {
      category: "📁 File Sharing",
      services: [
        { name: "Nextcloud", desc: "Cloud Storage & Kolaborasi Dokumen", url: "http://192.168.12.29:8081", icon: "☁️" },
        { name: "Seafile", desc: "File Syncing & Sharing Kecepatan Tinggi", url: "http://192.168.12.6:8080", icon: "📦" }
      ]
    },
    {
      category: "🖥️ IT Service",
      services: [
        { name: "GLPI", desc: "IT Asset Management & Helpdesk Ticketing", url: "http://192.168.12.6", icon: "🎫" },
        { name: "HESK", desc: "Customer Support & Ticketing Karyawan", url: "http://192.168.12.29", icon: "📨" }
      ]
    },
    {
      category: "🏥 Hospital Systems",
      services: [
        { name: "PACS", desc: "Picture Archiving and Communication System (Radiologi)", url: "http://192.168.105.8:8042", icon: "🩻" },
        { name: "HIS", desc: "Hospital Information System (teraMedik)", url: "http://192.168.105.2", icon: "📋" },
        { name: "DCM Router", desc: "Monitoring Dicom Router Status", url: "http://192.168.105.8:8080/dashboard", icon: "🔄" }
      ]
    },
    {
      category: "📊 Monitoring & Server Health",
      services: [
        { name: "Grafana", desc: "Visualisasi Data & Dashboard Analitik", url: "http://192.168.12.24:3000/d/bpjs-monitoring-v4/monitoring-api-bpjs?kiosk", icon: "📈" },
        { name: "Prometheus", desc: "Sistem Monitoring & Time-Series Database", url: "http://192.168.12.29:9090", icon: "🟢" },
        { name: "Uptime Kuma", desc: "Monitoring Status Uptime Service RS", url: "http://192.168.12.5:3001", icon: "❤️" }
      ]
    },
    {
      category: "🔧 Administrator Controls",
      services: [
        { name: "Portainer", desc: "Management Container Docker & Cluster", url: "http://192.168.12.5:9000", icon: "🐳" },
        { name: "Traefik", desc: "Reverse Proxy & Load Balancer Dashboard", url: "https://auth.rs.lan", icon: "🛡️" },
        { name: "Komodo", desc: "Deploy Manage Containers and Compose Stacks", url: "http://192.168.12.5:9120", icon: "🦎" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* HEADER BAR - Brawijaya Theme (Purple & Pink) */}
      <header className="bg-gradient-to-r from-purple-800 to-pink-600 text-white shadow-md py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex justify-center items-center gap-3">
            <span className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">🏥</span> 
            Brawijaya Hospital Tangerang
          </h1>
          <p className="text-purple-100 mt-3 text-md md:text-lg font-medium">Internal Service Portal</p>
          <div className="inline-block mt-4 px-4 py-1.5 bg-purple-900/30 rounded-full text-xs text-pink-100 border border-pink-300/30 backdrop-blur-sm">
            🔒 Terproteksi Jaringan Internal / VPN Only
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl w-full mx-auto px-4 py-10 flex-grow">
        <div className="space-y-12">
          {servicesData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              {/* Category Title */}
              <h2 className="text-xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
                {section.category}
              </h2>
              
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.services.map((service, sIdx) => (
                  <a
                    key={sIdx}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-xl border border-slate-200 hover:border-purple-400 hover:bg-fuchsia-50/50 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl p-2 bg-slate-100 group-hover:bg-purple-100 rounded-lg transition-colors">
                        {service.icon}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
                            {service.name}
                          </h3>
                          <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-pink-500 transition-all text-sm">
                            ➜
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {service.desc}
                        </p>
                        {/* <span className="inline-block text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded mt-3 max-w-full break-all">
                          {service.url.replace('http://', '').replace('https://', '')}
                        </span> */}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p suppressHydrationWarning>© 2026 IT Department - Brawijaya Hospital Tangerang.</p>
        <p className="mt-1 text-slate-400">Hubungi IT jika mengalami kendala akses.</p>
        <p className="mt-1 text-slate-400">All Rights Reserved.</p>
      </footer>

    </div>
  );
}