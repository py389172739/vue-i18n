import messages from './fixture/index'

describe('issues', () => {
  let vm
  beforeEach(() => {
    vm = new Vue({
      i18n: new VueI18n({
        locale: 'en',
        messages
      })
    })
  })


  describe('#24', () => {
    it('should be translated', () => {
      assert.equal(
        vm.$t('continue-with-new-account'),
        messages[vm.$i18n.locale]['continue-with-new-account']
      )
    })
  })

  describe('#35', () => {
    it('should be translated', () => {
      assert.equal(
        vm.$t('underscore', { helloMsg: 'hello' }),
        'hello world'
      )
    })
  })

  describe('#42, #43', () => {
    it('should not be occured error', () => {
      assert.equal(
        vm.$t('message[\'hello\']'),
        messages[vm.$i18n.locale]['message']['hello']
      )
    })
  })

  describe('#51', () => {
    it('should be translated', () => {
      assert.equal(
        vm.$t('message.hyphen-locale'),
        'hello hyphen'
      )
    })
  })

  describe('#91, #51', () => {
    it('should be translated', () => {
      const arrayMessages = messages[vm.$i18n.locale].issues.arrayBugs
      for (let i = 0; i < arrayMessages.length; i++) {
        const item = vm.$t('issues.arrayBugs')[i]
        assert.equal(item, arrayMessages[i])
      }
    })
  })

  describe('#97', () => {
    it('should be translated', () => {
      assert.equal(
        vm.$t('message.1234'),
        messages[vm.$i18n.locale]['message']['1234']
      )
      assert.equal(
        vm.$t('message.1mixedKey'),
        messages[vm.$i18n.locale]['message']['1mixedKey']
      )
    })
  })
})
