import unittest
from pyunitreport import HTMLTestRunner
from selenium import webdriver

class HelloWorld(unittest.TestCase):

  def setUp(self):
    # chrome_driver_binary = "/usr/bin/google-chrome-unstable"
    self.driver = webdriver.Chrome(
        executable_path=r'/home/chronos/Documents/Learning_platzi/python/Selenium-Python/platzi-selenium')
    driver = self.driver
    driver.implicitly_wait(10)

  def test_hello_world(self):
    driver = self.driver
    driver.get('https://www.platzi.com')

  def test_visit_wikipedia(self):
    self.dirver.get('https://www.wikipedia.org')

  def tearDown(self):
    self.driver.quit()

if __name__ == "__main__":
  unittest.main(verbosity = 2, testRunner = HTMLTestRunner(output = 'reportes', report_name = 'hello-world-report'))
