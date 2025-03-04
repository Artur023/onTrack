<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3"
  >
    <a href="#">
      <img src="./assets/logo.png" alt="logo" class="h-20" />
    </a>
    <a href="#" class="text-sm">
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
  <main class="dark:color-primary-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
    dignissimos dolorem dolores incidunt maiores modi molestiae mollitia nobis
    obcaecati quae quas, quod vitae? Aspernatur ipsam, magnam sed vero voluptas
    voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
    adipisci aliquam amet doloribus eos facilis impedit incidunt, laborum non,
    quasi quos repudiandae sed tempora vel voluptatem? Dignissimos excepturi
    fugiat laudantium minus quaerat quibusdam ratione reiciendis reprehenderit
    sunt unde! Aut consectetur exercitationem harum hic impedit ipsa itaque
    saepe ut vel voluptatem. Architecto distinctio ipsa natus quod totam, unde
    vel! A animi delectus ipsa magnam mollitia officia quasi quia repellat,
    tempore voluptas. Accusantium alias animi consectetur consequuntur culpa cum
    deleniti deserunt dignissimos, dolore eaque enim error eum ex exercitationem
    facilis impedit incidunt labore libero nam nesciunt non perspiciatis quaerat
    sit voluptatem voluptates! Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Architecto atque consequuntur debitis dolorem ex fuga id
    molestias, nobis provident sequi similique tempora tempore, veniam. A fugiat
    hic illum non odit, optio provident ratione reprehenderit saepe tempore!
    Architecto debitis deleniti doloribus dolorum, expedita fuga, fugiat harum
    illo laborum nulla provident, qui quidem sit ut voluptates. Ab accusantium,
    ad adipisci, aliquam aliquid ducimus enim eveniet explicabo fugiat incidunt
    iure laboriosam, nisi non obcaecati officiis repellendus sequi sunt velit
    veniam vitae voluptas voluptate voluptates. Dignissimos, expedita facere
    fuga laboriosam qui velit voluptate! Accusantium aliquam amet atque
    doloribus enim eos molestias nulla quam repellendus unde. Accusantium,
    delectus dicta eos facere laboriosam maxime placeat porro possimus quaerat
    qui sunt voluptate voluptates voluptatibus! Ab accusamus asperiores
    assumenda autem, blanditiis cumque delectus doloremque, eveniet ex fuga
    iure, laborum officia omnis quaerat quas recusandae suscipit tenetur velit!
    Adipisci animi aperiam consectetur cum, dolore doloremque eligendi est
    eveniet exercitationem facilis fugit id in ipsa ipsum iure laborum magni
    molestiae natus nemo neque obcaecati odio pariatur placeat praesentium
    quaerat quas quo quos ratione rem, repellat repudiandae sapiente sed sit
    veniam veritatis voluptates voluptatum? Alias assumenda est et omnis quaerat
    sit vel! Aut commodi delectus excepturi expedita fugit laboriosam
    perspiciatis quia repellat! A ad, aut deleniti, distinctio dolorum ea earum
    enim, eos harum id ipsam provident reprehenderit sit veritatis voluptates.
    Adipisci aliquid amet consequuntur, cum cupiditate dicta eius eligendi
    excepturi facere facilis hic incidunt inventore natus nisi pariatur
    similique sunt. Aperiam autem eligendi eos est hic quam, velit. Commodi
    culpa, deserunt ducimus error hic illum impedit iusto magni mollitia officia
    quasi saepe sunt suscipit unde vitae voluptates voluptatum. At atque
    deleniti distinctio nobis, saepe soluta ullam velit. Consequatur dolore
    ipsum modi nobis praesentium quidem recusandae rerum! At eaque est impedit
    perspiciatis quaerat repellat sed! Atque eaque earum hic id minus molestias
    mollitia obcaecati sunt. Autem consequuntur cupiditate, error eum labore
    obcaecati officia perspiciatis repudiandae! Accusamus animi architecto
    consequuntur eligendi fugit illum magnam praesentium quo! A accusamus amet
    aperiam, consequuntur corporis cum doloremque ducimus eius eveniet expedita
    explicabo facere fuga id ipsam minima minus, necessitatibus nemo nihil
    numquam provident quam quas reiciendis reprehenderit rerum sed sequi soluta
    tempora. Accusantium atque consectetur culpa cumque debitis delectus dicta
    dolore, dolores error exercitationem explicabo facilis ipsa labore magni
    maxime nobis officiis pariatur praesentium qui quibusdam recusandae sit
    soluta suscipit totam unde velit veritatis voluptates. Aperiam debitis
    dignissimos dolor laudantium neque nulla rerum. Numquam perspiciatis,
    voluptatibus?
  </main>
</template>
