@Library('zoominfo-pipeline-lib') _

archetype('ZoomInformation/jenkins-archetype-appengine-nodejs') {
  /* based on the app the user selects, we will end up using app specific properties from jenkins yaml */
  config_select = [ branches: env.BRANCH_NAME + (env.CHANGE_ID ? "-${env.CHANGE_BRANCH}" : "") ]

  on('configure') {
    define override_jenkins_source: true
    define override_jenkins_source_file: 'jenkins.yaml'
  }
}