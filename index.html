import pygame, random, math, sys

# Initialize Pygame
pygame.init()
WIDTH, HEIGHT = 1200, 700
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Zineb Moon Comet Game")
clock = pygame.time.Clock()

# Colors
BLACK = (0, 0, 0)
STAR_COLORS = [(255,255,255), (255,220,180), (180,180,255)]
COMET_COLORS = [(255,255,255), (255,200,100), (255,150,150), (150,200,255)]
FIRE_COLORS = [(255, 50, 0), (255,100,0), (255,200,50)]

# Moon
class Moon:
    def __init__(self):
        self.r = 80
        self.x = WIDTH * 0.5
        self.y = HEIGHT * 0.4
        self.dx = 2
        self.dy = 1.5
        self.alive = True
        self.craters = []
        self.generate_craters()
    
    def generate_craters(self):
        self.craters = []
        for _ in range(15):
            angle = random.uniform(0, math.pi*2)
            rad = random.uniform(0, self.r*0.7)
            cx = self.x + math.cos(angle)*rad
            cy = self.y + math.sin(angle)*rad
            cr = random.randint(5,12)
            self.craters.append((cx, cy, cr))
    
    def move(self):
        if not self.alive: return
        self.x += self.dx
        self.y += self.dy
        if self.x - self.r < 0 or self.x + self.r > WIDTH: self.dx *= -1
        if self.y - self.r < 0 or self.y + self.r > HEIGHT: self.dy *= -1

    def draw(self, surface):
        if not self.alive: return
        # Moon
        pygame.draw.circle(surface, (255, 255, 230), (int(self.x), int(self.y)), self.r)
        for cx, cy, cr in self.craters:
            pygame.draw.circle(surface, (180,180,180), (int(cx), int(cy)), cr)
        # Zineb text
        font = pygame.font.SysFont("Arial", int(self.r*0.7), bold=True)
        text = font.render("Zineb", True, (30,30,30))
        rect = text.get_rect(center=(self.x, self.y))
        surface.blit(text, rect)

moon = Moon()

# Comets
class Comet:
    def __init__(self):
        self.x = random.randint(0, WIDTH)
        self.y = random.randint(0, HEIGHT)
        self.vx = random.uniform(-2,2)
        self.vy = random.uniform(-2,2)
        self.color = random.choice(COMET_COLORS)
        self.trail = []
        self.max_trail = 50
        self.size = random.randint(3,6)
    
    def move(self, target_x, target_y):
        dx = target_x - self.x
        dy = target_y - self.y
        dist = math.hypot(dx, dy) or 1
        self.vx += dx/dist*0.2
        self.vy += dy/dist*0.2
        self.vx *= 0.9
        self.vy *= 0.9
        self.x += self.vx
        self.y += self.vy

        self.trail.append((self.x, self.y))
        if len(self.trail) > self.max_trail:
            self.trail.pop(0)
    
    def draw(self, surface):
        for i in range(1, len(self.trail)):
            a = i/len(self.trail)
            pygame.draw.line(surface, self.color, self.trail[i-1], self.trail[i], max(1, int(self.size*(1-a))))

comets = [Comet() for _ in range(12)]

# Stars
stars = [(random.randint(0,WIDTH), random.randint(0,HEIGHT), random.randint(1,2)) for _ in range(200)]

# Explosion particles
particles = []

score = 0
font_score = pygame.font.SysFont("Arial", 24)

def explode_moon():
    global particles, score
    moon.alive = False
    particles = []
    for _ in range(200):
        angle = random.uniform(0, math.pi*2)
        speed = random.uniform(2,6)
        px = moon.x + math.cos(angle)*random.uniform(0, moon.r)
        py = moon.y + math.sin(angle)*random.uniform(0, moon.r)
        particles.append({
            "x": px, "y": py,
            "vx": math.cos(angle)*speed, "vy": math.sin(angle)*speed,
            "life": random.uniform(0.5,1.5),
            "size": random.randint(2,5),
            "color": random.choice(FIRE_COLORS),
        })
    score += 1
    pygame.time.set_timer(pygame.USEREVENT+1, 2500)

# Main loop
running = True
while running:
    dt = clock.tick(60)/1000
    mx, my = pygame.mouse.get_pos()
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT: running=False
        if event.type == pygame.USEREVENT+1:
            moon.__init__()  # respawn moon

    # Draw stars
    for sx,sy,r in stars:
        pygame.draw.circle(screen, random.choice(STAR_COLORS), (sx,sy), r)

    # Move and draw moon
    moon.move()
    moon.draw(screen)

    # Move comets
    for c in comets:
        c.move(mx,my)
        c.draw(screen)
        if moon.alive and math.hypot(c.x-moon.x,c.y-moon.y) < moon.r + c.size:
            explode_moon()

    # Draw explosion particles
    for p in particles:
        pygame.draw.circle(screen, p["color"], (int(p["x"]), int(p["y"])), p["size"])
        p["x"] += p["vx"]
        p["y"] += p["vy"]
        p["vx"] *= 0.95
        p["vy"] *= 0.95
        p["life"] -= dt
    particles = [p for p in particles if p["life"]>0]

    # Draw score
    score_text = font_score.render(f"Score: {score}", True, (255,255,255))
    screen.blit(score_text, (10,10))

    pygame.display.flip()

pygame.quit()
sys.exit()

