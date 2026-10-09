const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const musicStatus = document.getElementById("musicStatus");

async function toggleMusic() {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "Ⅱ";
      musicStatus.textContent = "Playing for my Julie 💜";
    } catch (error) {
      musicStatus.textContent = "Add music.mp3 beside index.html";
    }
  } else {
    music.pause();
    musicButton.textContent = "▶";
    musicStatus.textContent = "Paused ♡";
  }
}

music.addEventListener("error", () => {
  musicStatus.textContent = "Please add your music.mp3 file 🎵";
  musicButton.textContent = "▶";
});

const messages = {
  miss: `
        <strong>When I miss you... 💌</strong><br><br>
        I remember the moments we've shared and look forward to seeing
        you again. Kabalo ka, even the smallest memory can make me smile.
        I miss you, baby. I hope I get to hug you soon. 💜
    `,

  prayer: `
        <strong>A little prayer for you 🙏</strong><br><br>
        Dear Lord, please guide Julie today. Give her peace when she
        worries, strength when she feels tired, wisdom in her choices,
        and joy in the little things. Help her grow closer to You and
        remind her of Your faithful love. In Jesus' name, Amen. 🤍
    `,

  secret: `
        <strong>Okay, here's my secret. 🤫</strong><br><br>
        Sometimes I open my phone without any important reason, then
        remember you and smile like an idiot. HAHAHAHA. 😭<br><br>
        Julie, what kind of magic are you using? Is this a software
        bug or a permanent feature? Because I don't think I want
        to uninstall it. 💗
    `,

  hug: `
        <strong>Sending you the biggest hug! 🫂</strong><br><br>
        Imagine me giving you a warm hug right now. No need to explain
        everything, no need to pretend you're always okay. Just breathe
        and take your time, baby.<br><br>
        Amping pirmi, ha? I'm cheering for you. Palangga ka sang Diyos,
        and I hope you always remember that you're precious. 💜
    `,
};

function showMessage(type) {
  const box = document.getElementById("surprise");
  document.getElementById("surpriseText").innerHTML = messages[type];

  box.classList.remove("visible");
  void box.offsetWidth;
  box.classList.add("visible");

  box.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });

  bloomFlowers(10);
}

function showVerse() {
  const verses = [
    '"The Lord is my shepherd; I shall not want." — Psalm 23:1 (KJV)',
    '"Be still, and know that I am God." — Psalm 46:10 (KJV)',
    '"Let all that you do be done in love." — 1 Corinthians 16:14 (ESV)',
    '"Cast all your anxiety on him because he cares for you." — 1 Peter 5:7 (NIV)',
  ];

  const verse = verses[Math.floor(Math.random() * verses.length)];
  const box = document.getElementById("surprise");

  document.getElementById("surpriseText").innerHTML =
    "<strong>A little Bible reminder 📖</strong><br><br>" +
    verse +
    "<br><br>May God's Word give you comfort and hope today, Julie. 🤍";

  box.classList.remove("visible");
  void box.offsetWidth;
  box.classList.add("visible");

  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function bloomFlowers(amount = 30) {
  const flowers = ["🌸", "🌷", "💜", "✨", "♡", "🌼"];

  for (let i = 0; i < amount; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = 40 + Math.random() * 50 + "vh";
    petal.style.fontSize = 15 + Math.random() * 18 + "px";
    petal.style.setProperty("--x", Math.random() * 250 - 125 + "px");
    petal.style.setProperty("--y", -100 - Math.random() * 220 + "px");
    petal.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 3500);
  }
}

function floatingHeart() {
  const heart = document.createElement("span");
  heart.className = "petal";
  heart.textContent = Math.random() > 0.5 ? "♡" : "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.setProperty("--x", Math.random() * 80 - 40 + "px");
  heart.style.setProperty("--y", "-110vh");
  heart.style.animationDuration = "8s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8500);
}

setInterval(floatingHeart, 1800);
