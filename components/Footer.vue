<template>
  <footer id="footer">
    <div class="uk-card uk-card-default uk-card-body">
      <div class="uk-margin-small-right">
        <a
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#98;&#101;&#108;&#108;&#64;&#98;&#116;&#114;&#46;&#112;&#109;"
          ><img
            id="emailid"
            src="~/assets/img/icons/mail.svg"
            alt="Contact Via Email"
        /></a>
        <div id="mailto" uk-dropdown="pos: top-right">
          <ul class="uk-nav uk-dropdown-nav">
            <li>
              <div class="uk-inline">
                <img
                  src="~/assets/img/icons/gmail.svg"
                  alt="Send email in Gmail"
                  width="20"
                  height="20"
                /><a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=&#100;&#98;&#101;&#108;&#108;&#64;&#98;&#116;&#114;&#46;&#112;&#109;&su=&cc=&bcc=&body="
                  >Send in Gmail</a
                >
              </div>
            </li>
            <li>
              <div class="uk-inline">
                <img
                  src="~/assets/img/icons/outlook.svg"
                  alt="Send Email in Outlook"
                  width="20"
                  height="20"
                /><a
                  href="https://outlook.office.com/owa/?path=/mail/action/compose&to=&#100;&#98;&#101;&#108;&#108;&#64;&#98;&#116;&#114;&#46;&#112;&#109;&subject=&body="
                  >Send in Outlook</a
                >
              </div>
            </li>
            <li>
              <div class="uk-inline">
                <img
                  src="~/assets/img/icons/mail.svg"
                  alt="Send Email in Client or App"
                /><a
                  href="mailto:&#100;&#98;&#101;&#108;&#108;&#64;&#98;&#116;&#114;&#46;&#112;&#109;"
                  >Send in Client/App</a
                >
              </div>
            </li>
            <li>
              <div class="uk-inline">
                <img
                  src="~/assets/img/icons/copy.svg"
                  alt="Copy Email Address"
                /><a href="#email" onClick="copyEmail()">Copy</a>
                <input
                  id="email"
                  style="width: 9.5em;"
                  class="uk-input"
                  type="text"
                  value="&#100;&#98;&#101;&#108;&#108;&#64;&#98;&#116;&#114;&#46;&#112;&#109;"
                />
              </div>
            </li>
          </ul>
        </div>
        <a href="https://www.linkedin.com/in/dashbell"
          ><img src="~/assets/img/icons/linkedin.svg" alt="Linkedin profile"
        /></a>
        <a href="http://instagram.com/dash.bell"
          ><img src="~/assets/img/icons/instagram.svg" alt="Instagram profile"
        /></a>
        <a href="https://github.com/x8BitRain"
          ><img src="~/assets/img/icons/github.svg" alt="GitHub profile"
        /></a>
        <a href="https://codepen.io/BitRain"
          ><img src="~/assets/img/icons/codepen.svg" alt="Codepen profile"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
/*footer*/

#footer .uk-card-body {
  margin-bottom: 30px;
}

#footer a {
  margin-right: 15px !important;
  padding: 10px;
}

#mailto > ul > li > div > img {
  margin-right: 15px;
}

#mailto .uk-button,
.uk-nav,
.uk-dropdown-nav > li > a {
  font-weight: 400 !important;
  text-align: left !important;
  color: #333 !important;
  font-family: B612 !important;
  text-transform: capitalize !important;
  font-size: 20px !important;
}

#mailto .uk-inline > a:nth-child(1) {
  background-color: #fff;
}
</style>
