<template>
  <v-app id="inspire">
    <LayoutSidebar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="(data, index) in messages">
                  <v-list-item :key="index">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle class="message">
                        {{ data.message }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${index}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-textarea
        v-model="body"
        append-icon="mdi-comment"
        class="mx-2"
        label="メッセージを送信"
        rows="3"
        auto-grow
      ></v-textarea>
      <v-btn class="mr-4" type="submit" :disabled="invalid" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "@/firebase/firebase";
import "@firebase/firestore";
import LayoutSidebar from "@/components/layouts/LayoutSidebar";

export default {
  async created() {
    this.user_id = this.$route.query.user_id;
    const charef = firebase.firestore().collection("chat-true");
    // console.log(charef);
    const snapshot = await charef.get();
    // console.log(snapshot);
    snapshot.forEach((doc) => {
      console.log(doc.data());
      this.messages.push(doc.data());
    });
  },
  components: {
    LayoutSidebar,
  },
  data: () => ({
    messages: [],
    body: "",
    user_id: "",
    cards: ["Today"],
    drawer: null,
    lid: false,
  }),
  computed: {
    invalid: function () {
      if (!this.body) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    clear: function () {
      this.body = "";
    },
    submit: function () {
      this.messages.unshift({ message: this.body });
      this.body = "";
    },
  },
};
</script>


<style type="text/css">
.message {
  text-align: left;
}
</style>
