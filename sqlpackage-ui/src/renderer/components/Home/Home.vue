<template>
<div>
    <div class="action-bar">
        <div v-for="action in actions" :key="action" @click="select(action)">
            {{action}}
        </div>
    </div>
    <div>
        <ConfigForm :help="form.help" :property="form.property" />
    </div>
</div>
</template>

<script>
import ConfigForm from "../ConfigForm/ConfigForm" 

export default {
    components: {
        ConfigForm
    },
    data() {
        const keys = Object.keys(this.$FormConfig)
        return {
            config: this.$FormConfig,
            actions: keys,
            selectedAction: keys[0] 
        }
    },
    computed: {
        form: function() {
            if(this.selectedAction) {
                const selectedForm = this.config[this.selectedAction]; 
                return selectedForm;
            } else {
                return null;
            }
        }
    },
    methods: {
        select(action) {
            this.selectedAction = action;
        }
    }
}
</script>

<style>
.action-bar {
    display: flex;
}
</style>