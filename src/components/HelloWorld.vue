<script lang="ts">
  import { defineComponent } from 'vue'
  import { run } from './utils'

  export default defineComponent({
    setup() {
      console.log('setup')
      run(async () => console.log('run'))
      Promise.resolve().then(() => console.log('resolved'))
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    mounted() {
      console.log('mounted')
    },
  })

  // Result:
  // setup
  // run
  // beforeCreate
  // mounted
  // resolved
</script>
