import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinationsList, type Destination } from "@/lib/destinations";
import { MapPin, Clock, Ticket, Library, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Koleksi = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleCardClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setSheetOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-16 bg-gradient-cream batik-pattern">
        <div className="container max-w-6xl px-4">
          {/* Page header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Library className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Koleksi Wisata Gamelan
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Jelajahi semua destinasi wisata gamelan di Keraton Yogyakarta
            </p>
          </div>

          {/* Destination grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationsList.map((destination) => (
              <Card
                key={destination.id}
                variant="elevated"
                className="overflow-hidden cursor-pointer group hover:shadow-gold transition-all duration-300"
                onClick={() => handleCardClick(destination)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {destination.id}
                  </span>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{destination.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ingin rekomendasi destinasi yang sesuai dengan preferensi Anda?
            </p>
            <Link to="/konsultasi">
              <Button variant="hero" className="gap-2">
                Mulai Konsultasi
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Detail Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="overflow-y-auto">
          {selectedDestination && (
            <>
              <SheetHeader>
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                    {selectedDestination.id}
                  </span>
                </div>
                <SheetTitle className="font-serif text-xl">
                  {selectedDestination.name}
                </SheetTitle>
                <SheetDescription className="text-left">
                  {selectedDestination.description}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-4">
                {/* Image */}
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Lokasi</p>
                      <p className="text-sm font-medium">Keraton Yogyakarta</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Jam Operasional</p>
                      <p className="text-sm font-medium">{selectedDestination.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Ticket className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Harga Tiket</p>
                      <p className="text-sm font-medium">{selectedDestination.price || "Gratis"}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link to="/konsultasi">
                    <Button variant="hero" className="w-full gap-2">
                      Konsultasi Sekarang
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
};

export default Koleksi;
