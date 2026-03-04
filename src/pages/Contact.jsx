import { useState } from 'react'
import { Form, Input, Button, message, Card, Space } from 'antd'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { lang } = useLanguage()
  const { profile, ui } = content[lang]
  const [form] = Form.useForm()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      form.resetFields()
      message.success(ui.contact.success)
    }, 1200)
  }

  return (
    <PageTransition>
      <section className="container max-w-5xl mx-auto px-4">
        <SectionTitle eyebrow={ui.nav.contact} title={ui.contact.title} description={ui.contact.desc} />

        <div className="grid two contact-grid">
          <Card className="form-card" variant="outlined">
            <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark>
              <Form.Item label={ui.contact.labels.name} name="name" rules={[{ required: true, message: ui.contact.rules.name }]}>
                <Input placeholder={lang === 'vi' ? 'Tên của bạn' : 'Your name'} />
              </Form.Item>
              <Form.Item
                label={ui.contact.labels.email}
                name="email"
                rules={[
                  { required: true, message: ui.contact.rules.emailReq },
                  { type: 'email', message: ui.contact.rules.emailFormat },
                ]}
              >
                <Input prefix={<Mail size={16} />} placeholder="you@example.com" />
              </Form.Item>
              <Form.Item label={ui.contact.labels.subject} name="subject" rules={[{ required: true, message: ui.contact.rules.subject }]}>
                <Input placeholder={lang === 'vi' ? 'Bạn muốn trao đổi về...' : 'What would you like to discuss?'} />
              </Form.Item>
              <Form.Item
                label={ui.contact.labels.message}
                name="message"
                rules={[
                  { required: true, message: ui.contact.rules.messageReq },
                  { min: 20, message: ui.contact.rules.messageMin },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder={lang === 'vi' ? 'Hãy cho mình biết thêm chi tiết' : 'Share more details'}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" icon={<Send size={16} />} loading={submitting} block>
                {ui.contact.submit}
              </Button>
            </Form>
          </Card>

          <Card className="contact-card" variant="outlined">
            <h3>{lang === 'vi' ? 'Kênh liên lạc khác' : 'Other channels'}</h3>
            <Space orientation="vertical" size="small" className="contact-links">
              <a className="link" href={`mailto:${profile.email}`}>
                <Mail size={14} /> {profile.email}
              </a>
              <a className="link" href="tel:+84816837690">
                <Phone size={14} /> {profile.phone}
              </a>
              <span>
                <MapPin size={14} /> {profile.location}
              </span>
              <a className="link" href={profile.githubProject} target="_blank" rel="noreferrer">
                <FaGithub size={14} /> {profile.githubProject}
              </a>
            </Space>
            <p className="muted">
              {lang === 'vi' ? 'Luôn mở để thảo luận về cơ hội thực tập Frontend.' : 'Open to discuss Frontend internship opportunities.'}
            </p>
          </Card>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
