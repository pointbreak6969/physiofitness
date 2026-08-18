import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("Missing MONGODB_URI");
  process.exit(1);
}

const client = new MongoClient(uri);

const posts = [
  {
    title: "Can Physiotherapy Cure Chronic Pain? The Blueprint for Long-Term Relief",
    slug: "can-physiotherapy-cure-chronic-pain",
    category: "Chronic Pain",
    date: "2026-05-24",
    excerpt:
      "Chronic pain is one of the most complex healthcare challenges globally, affecting millions of people every year. Here's how a structured, multimodal physiotherapy programme stacks up against medication-only approaches and lays out a blueprint for durable relief.",
    body: `**Chronic pain is different from acute pain.** While acute pain is a short-lived warning signal from an injury, chronic pain persists for three months or longer — often long after the original tissue has healed. Understanding this distinction is the first step on the path to lasting relief.

## What Is Chronic Pain?

Chronic pain is pain that continues beyond the expected healing time, usually more than 12 weeks. It can follow an injury, surgery, or illness — or it can appear with no obvious trigger at all.

Instead of being a simple alarm, the nervous system becomes sensitised. The brain keeps receiving pain signals even when the tissues are no longer injured. That's why chronic pain is as much a nervous-system condition as it is a tissue condition.

### Common Types of Chronic Pain

- **Low back pain and sciatica**
- **Neck and shoulder pain**
- **Knee and hip arthritis pain**
- **Fibromyalgia and widespread pain**
- **Post-surgical pain syndromes**

## Why Medication Alone Often Isn't Enough

Painkillers and anti-inflammatory drugs can reduce symptoms, but they rarely address the underlying drivers — weak muscles, poor movement patterns, fear of movement, and nervous-system sensitisation.

| Approach | Short-term relief | Long-term function |
| --- | --- | --- |
| Medication only | Often quick | Limited |
| Physiotherapy only | Moderate | Strong |
| Medication + physiotherapy | Strong | Strongest |

## How Physiotherapy Builds Long-Term Relief

A structured physiotherapy programme works on multiple fronts at once:

1. **Assessment** — identifying the true source of the problem, not just the symptoms.
2. **Movement retraining** — restoring normal joint and muscle function.
3. **Manual therapy** — reducing tissue tension and improving mobility.
4. **Exercise therapy** — building strength, flexibility and confidence.
5. **Pain education** — helping you understand and down-regulate the nervous system.

### The Role of Exercise

Exercise is one of the most powerful tools we have for chronic pain. It improves blood flow, strengthens supporting muscles, releases endorphins, and gradually desensitises the nervous system to movement.

**Consistency beats intensity.** A moderate programme you stick with will outperform an aggressive one you abandon after two weeks.

## What Results You Can Expect

Most patients notice meaningful change within **4–6 weeks** of consistent sessions. Full recovery depends on the condition, its duration, and how well the home exercise plan is followed.

> The goal is not just a lower pain score — it's teaching your body to move confidently again so pain fades into the background of daily life.

## The Bottom Line

Chronic pain is complex, but it is not hopeless. A structured, personalised physiotherapy plan — combined with good sleep, movement and stress management — can genuinely rewire how your body experiences pain. If you've been living with persistent pain, an assessment with a senior physiotherapist is the smartest next step.`,
  },
  {
    title: "Neck Pain and Cervical Spondylosis: How Physiotherapy Can Give You Lasting Relief",
    slug: "neck-pain-and-cervical-spondylosis-physiotherapy",
    category: "Neck Pain",
    date: "2026-05-17",
    excerpt:
      "If you wake up with a stiff neck or feel a constant ache at the base of your skull, you're not alone. We see this every day at the clinic — and the fix is rarely just about the neck itself. Here's how physiotherapy targets the real drivers.",
    body: `A stiff, aching neck has become one of the most common complaints among desk workers and smartphone users alike. The good news is that most neck pain — including cervical spondylosis — responds very well to physiotherapy.

## Why Your Neck Hurts

The neck is a delicate structure of seven vertebrae, discs, muscles and nerves that carry your head (which weighs around 4–5 kg) all day. When you sit at a desk with your head forward, the load on those structures grows dramatically.

### Common Causes

- **Poor posture** — forward head, rounded shoulders
- **Prolonged screen time** — desk and phone use
- **Cervical spondylosis** — age-related wear and tear on discs and joints
- **Muscle strain** — poor sleep positions or sudden movements
- **Stress** — neck and shoulder muscles tighten under tension

## What Is Cervical Spondylosis?

Cervical spondylosis is the age-related degeneration of the discs and joints in the neck. Over time, discs lose hydration and height, and bone spurs can form. It's very common after 40, and while it sounds alarming, most people manage it very well with conservative care.

### Typical Symptoms

- Dull ache in the neck or base of the skull
- Stiffness, especially in the morning
- Headaches that start at the back of the head
- Pain that spreads to shoulders or arms
- Occasional pins and needles or numbness

## How Physiotherapy Helps

| Technique | What it does |
| --- | --- |
| Manual therapy | Releases tight muscles and mobilises stiff joints |
| Postural retraining | Reduces forward-head strain |
| Stretching | Improves flexibility and range of motion |
| Strengthening | Builds endurance in the deep neck stabilisers |
| Ergonomic advice | Sets up your desk and sleep to protect your neck |

### Exercises You Can Start Today

1. **Chin tucks** — gently glide your head straight back, holding for 5 seconds.
2. **Shoulder rolls** — roll shoulders up, back and down to release tension.
3. **Upper trap stretch** — tilt your ear toward your shoulder and hold 20–30 seconds.
4. **Isometric holds** — press your head gently against your hand without moving it.

> **Caution:** If you ever feel sharp pain, dizziness, or numbness radiating down your arm, stop and get assessed before continuing any exercise.

## When to Seek Help

If neck pain lasts more than a few weeks, keeps returning, or affects your sleep and daily work, it's worth a proper assessment. Persistent pain usually has a posture, strength or biomechanical component that a physiotherapist can identify and correct.

## The Bottom Line

Neck pain and cervical spondylosis are extremely common — and extremely treatable. The right combination of manual therapy, exercise and posture awareness can reduce pain, restore movement, and keep your neck comfortable for the long term.`,
  },
];

async function seed() {
  try {
    await client.connect();
    const db = client.db("physiofitness");
    const collection = db.collection("blogs");

    let inserted = 0;
    let existing = 0;

    for (const post of posts) {
      const found = await collection.findOne({ slug: post.slug });
      if (found) {
        existing++;
        continue;
      }
      const now = new Date().toISOString();
      await collection.insertOne({ ...post, createdAt: now, updatedAt: now });
      inserted++;
    }

    console.log(`Seeding complete. Inserted: ${inserted}, already existed: ${existing}`);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
