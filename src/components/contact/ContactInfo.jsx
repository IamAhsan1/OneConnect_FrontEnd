import { contactInfo } from "@/data/contactData";

const ContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="bg-white py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Contact Information
          </span>

          <h2
            id="contact-info-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            We'd Love to Hear From You
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Reach out through any of the channels below. Our team is always
            ready to answer your questions and help you find the right solution.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 font-medium text-slate-700 break-words">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;