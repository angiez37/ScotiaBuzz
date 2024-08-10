import re

def detect_fraud(text):
    verified_domains = [
        "scotiabank.com",
        "tangerine.com",
        "gmail.com"
    ]

    flagged_words = {"urgent", "now", "free", "act now", "winner", "bonus", "click here"}

    count = 0
    flag = False
    emails = re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', text)
    unverified_emails = []

    for email in emails:
        domain = email.split("@",1)[1]

        if domain not in verified_domains:
            unverified_emails.append(domain)

    for word in text.split():
        if word.lower() in flagged_words:
            count += 1

    flag = len(unverified_emails) > 0 or count > 2
    print("Fraud Risk" if flag else "No Risk")


fraud_text = """From: customer-service@scot1abank.com
To: customer@gmail.com
Subject: URGENT - 3 days left to accept e-transfer

Message:

Hi Customer,

You have a pending E-transfer of $1000 dollars. This is an urgent reminder and after 3 days, the money will not be available. Please click this link to be directed to your bank page to accept your e-transfer now.

Best Regards,
Scotiabank Team
"""

safe_text = """From: customer-service@scotiabank.com
To: customer@gmail.com
Subject: ETransfer Reminder

Message:

Hi Customer,

You have a pending E-transfer. This is a reminder to check your account.

Best Regards,
Scotiabank Team
"""

detect_fraud(fraud_text)