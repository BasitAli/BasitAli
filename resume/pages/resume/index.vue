<template>
  <div class="page">
    <div class="head">
      <img class="profile" src="~/assets/profile.png" />
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
          <div>
            <strong>Address:</strong>
            <span>{{ resume.contact.address }}</span>
          </div>
        </div>
      </div>
      <ul v-if="resume.social" class="social">
        <li><linkedin /> linkedin.com/in/{{ resume.social.linkedin }}</li>
        <li><github />github.com/{{ resume.social.github }}</li>
        <li><twitter /> @{{ resume.social.twitter }}</li>
        <!-- <li><web />{{ resume.contact.website }}</li> -->
      </ul>
    </div>
    <div v-if="resume.about" class="about">{{ resume.about }}</div>
    <section>
      <h1>Summary</h1>
      <ul>
        <li v-for="summary in resume.summary" :key="summary">
          {{ summary }}
        </li>
      </ul>
    </section>
    <section class="education">
      <h1>Education</h1>
      <ul>
        <li
          v-for="(education, idx) in resume.education"
          :key="idx"
          class="section-item"
        >
          <h2>{{ education.degree }}</h2>
          <h3>{{ education.institution }}</h3>
          <div>{{ education.date }}</div>
        </li>
      </ul>
    </section>
    <section>
      <h1>Work Experience</h1>
      <ul>
        <li
          v-for="(experience, idx) in resume.experience"
          :key="idx"
          class="experience section-item"
        >
          <h2>{{ experience.title }} at {{ experience.company }}</h2>
          <div>{{ experience.from }} - {{ experience.to || "Present" }}</div>
        </li>
      </ul>
    </section>
    <section class="research">
      <h1>Research Experience</h1>
      <p class="summary">{{ resume.research.summary }}</p>
      <ul>
        <li v-for="(research, idx) in resume.research.list" :key="idx">
          <div class="research-item">
            <div class="content">
              <h2>{{ research.name }}</h2>
              <strong>DOI:</strong> {{ research.doi }}
            </div>
            <img class="qr-code" :src="require(`~/assets/${research.image}`)" />
          </div>
        </li>
      </ul>
    </section>
    <section class="accreditations">
      <h1>Accreditations</h1>
      <ul>
        <li
          v-for="(accreditations, idx) in resume.accreditations"
          :key="idx"
          class="section-item"
        >
          <h2>{{ accreditations.title }}</h2>
          <h3>{{ accreditations.date }}</h3>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import resume from "./data.yml";
import Linkedin from "@mdi/svg/svg/linkedin.svg?inline";
import Twitter from "@mdi/svg/svg/twitter.svg?inline";
import Github from "@mdi/svg/svg/github.svg?inline";
import Web from "@mdi/svg/svg/web.svg?inline";

export default {
  head: {
    title: "Resume | Dr Naseem Amin Dhedhi",
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
  align-items: flex-start;

  .profile {
    align-self: stretch;
    height: 110px;
    width: auto;
    margin-right: 1rem;
  }

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

  &.experience {
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

.experience {
  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0.5rem;
  }
}

section {
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

.research {
  .summary {
    margin-bottom: 1rem;
  }

  .research-item {
    display: flex;
    flex-direction: row;

    .qr-code {
      width: 80px;
      height: auto;
    }
  }
}
</style>
