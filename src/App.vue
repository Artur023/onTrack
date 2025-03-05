<script setup>
import {
  CheckCircleIcon,
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/solid';

const navList = ['timeline', 'activities', 'progress'];
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3"
  >
    <a href="#">
      <img alt="logo" class="h-20" src="./assets/logo.png" />
    </a>
    <a class="text-sm" href="#">
      <div v-if="true" class="flex items-center gap-1">
        Day complite!
        <CheckCircleIcon class="h-7 text-green-800" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-800"></div>
      </div>
    </a>
  </header>
  <main class="flex flex-grow flex-col">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
    architecto dolore esse ex excepturi expedita fugiat fugit illum inventore
    iure magnam magni minima minus nam neque nulla odit pariatur quae quasi
    quibusdam sequi sint sit, unde veritatis vitae, voluptatum? A atque commodi
    dolor ducimus eum in molestias natus obcaecati optio, perferendis
    praesentium quam, quas sed tempora voluptate voluptatibus voluptatum? A
    aperiam aut culpa cumque cupiditate debitis delectus dicta dolore dolorem ea
    et expedita explicabo inventore labore laudantium molestiae mollitia
    necessitatibus nisi, nobis, optio placeat porro quisquam quod quos ratione
    recusandae rem repellendus, saepe temporibus totam vel vero vitae voluptate!
    A adipisci alias animi aut autem beatae cumque, debitis dignissimos ducimus
    ea excepturi expedita fuga minima, molestias non officiis placeat quae quas
    qui quidem, quisquam soluta vel voluptates! Eum facere iste sequi tenetur
    voluptatem. Adipisci animi blanditiis debitis delectus distinctio doloribus
    dolorum error eveniet fugit illum magnam maxime modi, mollitia
    necessitatibus neque optio perspiciatis quaerat qui quo recusandae rem rerum
    sapiente sequi sint ullam ut voluptas! Accusamus animi architecto aspernatur
    atque cupiditate distinctio ducimus eveniet exercitationem, explicabo maxime
    minus nulla odio pariatur provident soluta vel veritatis! Molestiae quaerat
    sapiente sequi voluptates! Aspernatur dolor enim error exercitationem fuga
    labore laudantium molestias necessitatibus, non, perspiciatis quas,
    quibusdam quidem quos sequi sint veritatis voluptate voluptates! Accusantium
    at deleniti deserunt molestiae nemo rerum unde. Ab architecto asperiores at
    atque deleniti deserunt dolore expedita iusto maxime nihil odit provident
    quasi, quisquam repellat rerum suscipit ullam. Assumenda dolorum ea fuga
    molestias necessitatibus provident quisquam reprehenderit rerum, voluptas!
    Amet aperiam aut doloremque dolorum earum, hic iusto libero mollitia quidem
    veritatis vitae voluptas? Adipisci animi asperiores beatae deserunt
    dignissimos distinctio dolor exercitationem harum incidunt iusto
    necessitatibus, nisi odio porro repellat, sed sit voluptatibus. Aspernatur
    aut dolore exercitationem expedita iusto, nisi repellendus sint totam ullam!
    Blanditiis corporis, ea fugit id nesciunt non officia omnis quaerat,
    recusandae repellendus, repudiandae rerum totam. Consequatur cumque harum
    natus obcaecati perferendis, possimus reiciendis. Ab aliquam aliquid
    aspernatur at aut doloremque earum enim esse et fugiat illo illum ipsam
    iusto labore maiores quas qui quidem quisquam recusandae reiciendis rem
    rerum saepe sequi soluta tenetur, vero voluptatum? A ab cupiditate,
    doloribus, fugit itaque nam necessitatibus, numquam porro quaerat quidem
    quisquam reiciendis saepe soluta ullam velit. Amet corporis debitis ea
    eligendi eveniet facere fugiat id maxime nisi nobis, suscipit, ut? Aut
    consequatur ea earum excepturi inventore laborum, sunt. A ad beatae delectus
    distinctio dolores exercitationem facilis illum laborum reiciendis sunt.
    Aliquid amet aspernatur autem, delectus deleniti doloremque excepturi hic
    inventore laudantium maiores, modi nihil nobis perferendis perspiciatis
    praesentium, quo recusandae repudiandae sint sunt temporibus. Accusantium
    aperiam aspernatur, aut consequatur cupiditate eaque illum impedit ipsa
    laboriosam laborum molestiae natus odio odit, omnis, perferendis porro saepe
    sequi sint. Aliquam asperiores consequatur dolorum exercitationem, magni
    quas veritatis voluptas! Aperiam dolores dolorum eum explicabo pariatur
    quaerat quia quos. Accusantium asperiores consequatur consequuntur cum
    debitis dignissimos distinctio dolorum earum eius fugit harum ipsam labore
    minus necessitatibus odio officiis placeat, porro quibusdam, quisquam quod
    reiciendis saepe sapiente similique soluta tenetur vero voluptate?
    Doloribus!
  </main>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <li v-for="page in navList" key="page" class="flex-1">
        <a
          :href="`#${page}`"
          class="flex flex-col items-center p-2 text-xs capitalize"
        >
          <ClockIcon v-if="page === 'timeline'" class="h-6 w-6" />
          <ListBulletIcon v-else-if="page === 'activities'" class="h-6 w-6" />
          <ChartBarIcon v-else class="h-6 w-6" />
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
