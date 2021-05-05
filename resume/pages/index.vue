<template>
  <div class="page">
    <div class="head">
      <div class="info">
        <h1>{{ resume.name }}</h1>
        <h2>{{ resume.title }}</h2>
        <div class="contact">
          <div>
            <strong>Email:</strong>
            <span>{{ resume.contact.email }}</span>
          </div>
          <div>
            <strong>Phone:</strong>
            <span>{{ resume.contact.phone }}</span>
          </div>
        </div>
      </div>
      <ul class="social">
        <li><linkedin /> linkedin.com/in/{{ resume.social.linkedin }}</li>
        <li><github />github.com/{{ resume.social.github }}</li>
        <li><twitter /> @{{ resume.social.twitter }}</li>
        <!-- <li><web />{{ resume.contact.website }}</li> -->
      </ul>
    </div>
    <div class="about">{{ resume.about }}</div>
    <div>
      <dl class="summary">
        <dt>Working since</dt>
        <dd>{{ resume.summary.working_since }}</dd>
        <dt>Current City</dt>
        <dd>{{ resume.summary.current_city }}</dd>
        <dt>Company</dt>
        <dd>{{ resume.summary.current_company }}</dd>
        <dt>Role</dt>
        <dd>{{ resume.summary.current_role }}</dd>
      </dl>
    </div>
    <section>
      <h1>Skills</h1>
      <dl class="table">
        <template v-for="(skill, idx) in resume.skills">
          <dt :key="idx">{{ skill.name }}</dt>
          <dd :key="idx">{{ skill.description }}</dd>
        </template>
      </dl>
    </section>
    <section>
      <h1>Employment History</h1>
      <div
        v-for="(employment, idx) in resume.employments"
        :key="idx"
        class="employment section-item"
      >
        <h2>{{ employment.title }} @ {{ employment.company }}</h2>
        <div>{{ employment.from }} - {{ employment.to || "Present" }}</div>
        <template v-if="employment.achievements">
          <!-- <h3>Tasks / Achievements</h3> -->
          <ul>
            <li
              v-for="achievement in employment.achievements"
              :key="achievement"
            >
              {{ achievement }}
            </li>
          </ul>
        </template>
      </div>
    </section>
    <section class="education">
      <h1>Education</h1>
      <ol>
        <li
          v-for="(education, idx) in resume.education"
          :key="idx"
          class="section-item"
        >
          <h2>{{ education.degree }}, {{ education.program }}</h2>
          <h3>{{ education.institution }}</h3>
          <div>{{ education.date }}</div>
        </li>
      </ol>
    </section>
    <section>
      <h1>Work Highlights</h1>
      <div
        v-for="(highlight, idx) in resume.highlights"
        :key="idx"
        class="highlight section-item"
      >
        <h2>{{ highlight.name }}</h2>
        <a href="">{{ highlight.website }}</a>
        <p>{{ highlight.description }}</p>
        <dl v-if="highlight.stack" class="tech-stack table">
          <template v-for="stack in highlight.stack">
            <dt :key="stack.group">
              {{ stack.group }}
            </dt>
            <dd :key="stack.group">
              {{ stack.tech.join(", ") }}
            </dd>
          </template>
        </dl>
        <template v-if="highlight.highlights">
          <h3>Highlights:</h3>
          <ul>
            <li v-for="item in highlight.highlights" :key="item">
              {{ item }}
            </li>
          </ul>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import resume from "../config/data.yml";
import Linkedin from "@mdi/svg/svg/linkedin.svg?inline";
import Twitter from "@mdi/svg/svg/twitter.svg?inline";
import Github from "@mdi/svg/svg/github.svg?inline";
import Web from "@mdi/svg/svg/web.svg?inline";

export default {
  head: {
    title: "Resume | Basit Ali",
  },
  components: {
    Linkedin,
    Twitter,
    Github,
    Web,
  },
  data() {
    return { resume };
  },
};
</script>

<style scoped lang="scss">
.page {
  background: #191a1b;
  color: white;

  width: 800px;
  margin: 40px auto 60px;

  @media print {
    margin: 0 auto;
  }
}

h1 {
  margin: 1.5rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: 400;
}

.head {
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .contact {
    margin-top: 0.25rem;
  }

  strong {
    font-weight: 400;
  }

  .info {
    flex: 1;
    dl {
      column-width: auto;
    }
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  ul.social {
    list-style-type: none;

    li {
      display: flex;
      margin-top: 0.25rem;
      align-items: center;

      svg {
        margin-right: 0.25rem;
      }
    }
  }
}

dl.summary {
  display: grid;
  gap: 0 1rem;
  margin: 1rem 0;
  padding: 0.5rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  dt {
    grid-row-start: 1;
    font-weight: 400;
  }

  dd {
    grid-row-start: 2;
  }
}

dl.table {
  display: grid;
  gap: 0.5rem 1rem;

  &.tech-stack {
    grid-template-columns: 100px auto;
    gap: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: 400;
    grid-column-start: 1;
  }
  dd {
    grid-column-start: 2;
  }
}

.section-item {
  // border-left: 10px solid #ccc;
  margin-bottom: 1rem;
  // margin-left: 0.25rem;
  // padding-left: 1rem;
  page-break-inside: avoid;
  // page-break-before: always;

  &.highlight {
    h2 {
      margin-bottom: 0;
    }

    p {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    a {
      display: block;
      color: black;
    }
  }

  &.employment {
    ul {
      margin-top: 0.5rem;
    }
  }
}

ul {
  list-style-type: square;
  list-style-position: outside;
  padding-left: 1rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
}

li {
  margin-top: 0.25rem;
}

.employment {
  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0.5rem;
  }
}

.education {
  h2 {
    margin-bottom: 0;
  }

  ol {
    list-style-type: none;
  }
}

div.about {
  margin: 1rem 0 1.5rem;
}
</style>
