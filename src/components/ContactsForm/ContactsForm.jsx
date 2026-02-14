import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const ContactsForm = () => {
  const { t } = useLanguage()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'required'
    if (!form.email.trim() && !form.phone.trim()) next.contact = 'required'
    if (form.email.trim()) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!re.test(form.email.trim())) next.email = 'invalid'
    }
    if (form.phone.trim()) {
      const re = /^[+0-9\s()-]{6,}$/
      if (!re.test(form.phone.trim())) next.phone = 'invalid'
    }
    if (!form.message.trim()) next.message = 'required'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm text-center">
        <h3 className="text-2xl font-semibold mb-3" style={{color: '#04babd'}}>
          {t('contactsPage.successTitle')}
        </h3>
        <p className="text-gray-700">{t('contactsPage.successText')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contactsPage.name')}
        </label>
        <input
          name="name"
          value={form.name}
          onChange={update}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#04babd]"
          placeholder={t('contactsPage.namePlaceholder')}
        />
        {errors.name && (
          <p className="text-red-600 text-xs mt-1">{t('contactsPage.required')}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('contactsPage.email')}
          </label>
          <input
            name="email"
            value={form.email}
            onChange={update}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#04babd]"
            placeholder={t('contactsPage.emailPlaceholder')}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{t('contactsPage.emailInvalid')}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('contactsPage.phone')}
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#04babd]"
            placeholder={t('contactsPage.phonePlaceholder')}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1">{t('contactsPage.phoneInvalid')}</p>
          )}
        </div>
      </div>
      {errors.contact && (
        <p className="text-red-600 text-xs">{t('contactsPage.emailOrPhoneRequired')}</p>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contactsPage.subject')}
        </label>
        <input
          name="subject"
          value={form.subject}
          onChange={update}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#04babd]"
          placeholder={t('contactsPage.subjectPlaceholder')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contactsPage.message')}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={6}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#04babd]"
          placeholder={t('contactsPage.messagePlaceholder')}
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">{t('contactsPage.required')}</p>
        )}
      </div>

      <button
        type="submit"
        className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
        style={{backgroundColor: '#04babd'}}
      >
        {t('contactsPage.submit')}
      </button>
    </form>
  )
}

export default ContactsForm
