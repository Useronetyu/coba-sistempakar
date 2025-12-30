import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import { ArrowRight, Music2, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-kraton.jpg')" }}
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Batik pattern overlay */}
          <div className="absolute inset-0 batik-pattern opacity-30" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container relative py-16 md:py-32 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in-up">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">Sistem Pakar Wisata Budaya</span>
              </div>

              {/* Main heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight opacity-0 animate-fade-in-up stagger-1">
                Temukan Harmoni{" "}
                <span className="text-primary relative">
                  Gamelan
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5C47.6667 2.16667 152.4 -1.8 199 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-primary/60"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-2">
                Eksplorasi keindahan dan filosofi Gamelan Yogyakarta melalui sistem pakar
                interaktif. Dapatkan rekomendasi destinasi wisata yang sesuai dengan
                preferensi Anda.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-up stagger-3">
                <Link to="/konsultasi">
                  <Button variant="hero" size="xl" className="gap-2 group">
                    <Music2 className="h-5 w-5" />
                    Mulai Konsultasi
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Decorative diamond */}
              <div className="flex items-center justify-center gap-4 pt-8 opacity-0 animate-fade-in-up stagger-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
                <span className="text-primary">◆</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Warisan Budaya Nusantara
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Gamelan adalah warisan budaya Indonesia yang diakui dunia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <StatCard value="500+" label="Instrumen Gamelan" delay="0.1s" />
              <StatCard value="15+" label="Jenis Gamelan" delay="0.2s" />
              <StatCard value="100+" label="Tahun Sejarah" delay="0.3s" />
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="py-16 md:py-24 bg-cream-dark/30 batik-pattern">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Bagaimana Sistem Bekerja
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Tiga langkah mudah untuk menemukan destinasi gamelan yang sempurna
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Pilih Tujuan",
                  desc: "Tentukan apa yang ingin Anda alami - menonton, belajar, atau dokumentasi",
                },
                {
                  step: "02",
                  title: "Atur Waktu",
                  desc: "Pilih waktu kunjungan dan durasi yang sesuai dengan jadwal Anda",
                },
                {
                  step: "03",
                  title: "Dapatkan Rekomendasi",
                  desc: "Sistem pakar akan menganalisis dan memberikan rekomendasi terbaik",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="text-center p-6 rounded-xl bg-background border border-border shadow-card opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-serif font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/konsultasi">
                <Button variant="outline" size="lg" className="gap-2">
                  Coba Sekarang
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
