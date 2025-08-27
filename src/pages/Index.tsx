import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Github, Linkedin, Mail, ExternalLink, GamepadIcon, Code2, Trophy, Coffee, BookOpen, Calendar, ArrowRight, Shield, Lock, Eye } from "lucide-react";
import heroImage from "@/assets/vikram-hero.png";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="pixel-heart w-6 h-6" />
            <span className="font-bold text-xl">Vikram</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-lovable">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-lovable">Games</button>
            <button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-lovable">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-lovable">Contact</button>
            <button onClick={() => scrollToSection('privacy')} className="hover:text-primary transition-lovable">Privacy</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Star className="w-4 h-4 pixel-star" />
                  Game Developer at Lovable
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-primary">Vikram</span> – I make{" "}
                  <span className="pixel-heart">lovable</span> games.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate about creating joyful gaming experiences that bring people together. 
                  From pixel perfect mechanics to heartwarming stories, I craft games with love.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <GamepadIcon className="w-5 h-5" />
                  View My Games
                </Button>
                <Button 
                  variant="gaming" 
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl card-shadow">
                <img 
                  src={heroImage} 
                  alt="Vikram - Game Developer" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">The story behind the games</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Journey into Game Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                My love for games started with retro classics and pixel adventures. What began as a 
                childhood fascination with how games work evolved into a career dedicated to crafting 
                experiences that spark joy and wonder.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Lovable, I get to combine technical expertise with creative storytelling, 
                building games that aren't just played—they're cherished. Every project is an 
                opportunity to create something truly special.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Unity</Badge>
                <Badge variant="secondary">C#</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Pixel Art</Badge>
                <Badge variant="secondary">Game Design</Badge>
                <Badge variant="secondary">Storytelling</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Fun Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Coffee className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Coffee Powered</p>
                    <p className="text-sm text-muted-foreground">Best code happens between 2-4 cups</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Indie Game Jam Winner</p>
                    <p className="text-sm text-muted-foreground">3x local game jam champion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 pixel-heart mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Favorite Genre</p>
                    <p className="text-sm text-muted-foreground">Cozy simulation & puzzle games</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Games</h2>
            <p className="text-xl text-muted-foreground">Crafted with love, played with joy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Game Cards */}
            <Card className="card-shadow hover:shadow-glow transition-lovable group">
              <CardHeader className="pb-4">
                <div className="h-48 bg-gradient-gaming rounded-lg mb-4 flex items-center justify-center">
                  <GamepadIcon className="w-12 h-12 text-white/80" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  Pixel Heart Adventures
                  <Heart className="w-4 h-4 pixel-heart" />
                </CardTitle>
                <CardDescription>
                  A cozy platformer about collecting hearts and spreading joy through magical worlds.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Unity</Badge>
                  <Badge variant="outline">Mobile</Badge>
                  <Badge variant="outline">Indie</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="gaming" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    Play
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-glow transition-lovable">
              <CardHeader className="pb-4">
                <div className="h-48 bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-white/80" />
                </div>
                <CardTitle>Code Quest</CardTitle>
                <CardDescription>
                  An educational puzzle game that teaches programming concepts through fun challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Web</Badge>
                  <Badge variant="outline">Educational</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="gaming" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    Play
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-glow transition-lovable">
              <CardHeader className="pb-4">
                <div className="h-48 bg-gradient-card border-2 border-dashed border-muted-foreground/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Star className="w-8 h-8 mx-auto mb-2 pixel-star" />
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
                <CardTitle>Mystery Project</CardTitle>
                <CardDescription>
                  Something amazing is brewing! A new adventure that will redefine lovable gaming.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TBA</Badge>
                  <Badge variant="outline">Exciting</Badge>
                </div>
                <Button variant="secondary" size="sm" className="w-full" disabled>
                  <Heart className="w-4 h-4" />
                  Stay Tuned
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dev Diary & Blog</h2>
            <p className="text-xl text-muted-foreground">Thoughts on game development, tutorials, and behind-the-scenes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Cards */}
            <Card className="card-shadow hover:shadow-glow transition-lovable group">
              <CardHeader className="pb-4">
                <div className="h-48 bg-gradient-gaming rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white/80" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 15, 2024</span>
                  <Badge variant="outline" className="ml-auto">DevLog</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-lovable">
                  Building Lovable Games: My Design Philosophy
                </CardTitle>
                <CardDescription>
                  What makes a game truly lovable? Exploring the intersection of mechanics, emotion, and player connection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="gaming" size="sm" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-glow transition-lovable group">
              <CardHeader className="pb-4">
                <div className="h-48 bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-white/80" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 10, 2024</span>
                  <Badge variant="outline" className="ml-auto">Tutorial</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-lovable">
                  Unity Tips: Creating Smooth Animations
                </CardTitle>
                <CardDescription>
                  Step-by-step guide to crafting fluid character movements that feel responsive and satisfying.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="gaming" size="sm" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-glow transition-lovable group">
              <CardHeader className="pb-4">
                <div className="h-48 bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="w-12 h-12 pixel-heart text-primary" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 5, 2024</span>
                  <Badge variant="outline" className="ml-auto">Thoughts</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-lovable">
                  The Magic of Indie Game Jams
                </CardTitle>
                <CardDescription>
                  Reflecting on my journey through game jams and how 48-hour constraints spark incredible creativity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="gaming" size="sm" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Create Something Lovable</h2>
            <p className="text-xl text-muted-foreground">Ready to build the next amazing game experience?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a game idea, want to collaborate, or just want to chat about 
                  the magic of game development, I'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>vikram@lovable.dev</span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Let's start a conversation about games!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your game idea..."
                  />
                </div>
                <Button variant="hero" className="w-full">
                  <Heart className="w-4 h-4" />
                  Let's Build Something Lovable!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-xl text-muted-foreground">Your privacy matters to me</p>
          </div>
          
          <div className="space-y-12">
            <Card className="card-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <CardTitle>Information Collection</CardTitle>
                </div>
                <CardDescription>
                  This website respects your privacy and follows best practices for data protection.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    What Information We Collect
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Contact form submissions (name, email, message)</li>
                    <li>Basic website analytics (page views, browser info)</li>
                    <li>No personal data is stored without your explicit consent</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    How We Protect Your Data
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>All data is encrypted in transit and at rest</li>
                    <li>Contact forms are processed securely</li>
                    <li>No third-party trackers or unnecessary cookies</li>
                    <li>Data is never sold or shared with advertisers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Contact & Rights</CardTitle>
                <CardDescription>
                  Questions about privacy or want to exercise your data rights?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or how your data is handled, 
                  please don't hesitate to reach out. You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                </ul>
                <div className="pt-4">
                  <Button variant="outline" onClick={() => scrollToSection('contact')}>
                    <Mail className="w-4 h-4" />
                    Contact Me About Privacy
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>Last updated: December 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="pixel-heart w-5 h-5" />
              <span className="text-muted-foreground">Made with love by Vikram</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 Vikram - Game Developer</span>
              <span>•</span>
              <button onClick={() => scrollToSection('privacy')} className="hover:text-primary transition-lovable">Privacy Policy</button>
              <span>•</span>
              <span>Powered by Lovable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;